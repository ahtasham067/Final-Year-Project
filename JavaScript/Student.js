
    $(document).ready(function () {
                $("#Proposal").show();
                $("#Srs").hide();
                $("#FinalReport").hide();
            });

            $(".proposallink").click(function () {
                $("#Proposal").show();
                $("#Srs").hide();
                $("#FinalReport").hide();
            });
            $(".srslink").click(function () {
                $("#Srs").show();
                $("#Proposal").hide();
                $("#FinalReport").hide();
            });
            $(".FinalReportLink").click(function () {
                $("#FinalReport").show();
                $("#Proposal").hide();
                $("#Srs").hide();
            });