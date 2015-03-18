# Assimilate
## Commandline syntax

The commandline syntax for invocation of assimilate is:

    assimilate <data>

The local vinculum instance will dispatch on the data and do something useful with it, according to the defined rules and portocols. It may be a URL, a blob of text, a file, or - for standard input. If the data is stdin or a file, assimilate will upload the object to vinculum for analysis and handling after reading it locally. If the data is a URL, the URL will not be downloaded locally, but passed as-is for management by the server.

Assimilating a file containing prepared data is functionally equivalent to entering the same data as an argument, but may be preferred (or even required) for very large blobs of data.

### Delivered metadata
The following metadata will be sent to vinculum along with the data package:
- The current time and date with timezone
- Location (if available)
- IP address of local machine
- User name (if available)
- Machine name (as returned by hostname)

### Output
After a submission, assimilate will reply (on standard output) with either an error from vinculum, or with a confirmation message with details on what vinculum did with its data – most notably in which realm it was stored.

# Requirements
See cabal file for now.

# Build and run
Build

     cabal sandbox init # only the first time
     cabal install --enable-tests -j

And run:

     cabal run

Run tests:

     cabal test
