<%@ Page Title="Домашняя страница" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="Default.aspx.cs" Inherits="Ext._Default" %>

<asp:Content runat="server" ID="FeaturedContent" ContentPlaceHolderID="FeaturedContent">
    <section class="featured">
        <div class="content-wrapper">
            <hgroup class="title">
                <h1><%: Title %>.</h1>
                <h2>Измените этот шаблон, чтобы быстро приступить к работе над приложением ASP.NET.</h2>
            </hgroup>
            <p>
                Дополнительные сведения об ASP.NET см. на сайте <a href="http://asp.net" title="ASP.NET Website">http://asp.net</a>.
                На странице приводятся <mark>видеоматериалы, учебники и образцы кода</mark> , позволяющие лучшим образом использовать ASP.NET.
                По всем вопросам об ASP.NET обращайтесь на
                <a href="http://forums.asp.net/18.aspx" title="ASP.NET Forum">наши форумы</a>.
            </p>
        </div>
    </section>
</asp:Content>
<asp:Content runat="server" ID="BodyContent" ContentPlaceHolderID="MainContent">
    <h3>Рекомендуются следующие действия:</h3>
    <ol class="round">
        <li class="one">
            <h5>Приступая к работе</h5>
            Веб-формы ASP.NET позволяют создавать динамичные веб-сайты, используя знакомую модель разработки с событиями и перетаскиванием.
            Рабочая область проектирования, сотни элементов управления и компонентов позволяют быстро создавать сложные и мощные сайты с развитым пользовательским интерфейсом и доступом к данным.
            <a href="http://go.microsoft.com/fwlink/?LinkId=245146">Дополнительные сведения…</a>
        </li>
        <li class="two">
            <h5>Добавление пакетов NuGet и переход к программированию</h5>
            NuGet упрощает установку и обновление бесплатных библиотек и средств.
            <a href="http://go.microsoft.com/fwlink/?LinkId=245147">Дополнительные сведения…</a>
        </li>
        <li class="three">
            <h5>Найти поставщика услуг размещения веб-сайтов</h5>
            Можно легко найти компанию, предоставляющую услуги размещения приложений в Интернете и отвечающую вашим требованиям к цене и функциональным возможностям.
            <a href="http://go.microsoft.com/fwlink/?LinkId=245143">Дополнительные сведения…</a>
        </li>
    </ol>
</asp:Content>
