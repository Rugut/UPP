Ext.define('Справочники.ОтраслевыеСегментыПоМСФО.ФормаСпискаСобытия',
{
	ПередатьСсылку: function (строкаЗначений)
	{
		var ссылка = строкаЗначений.Ссылка;
		var st = Ext.create('Ext.data.Store',
		{
			autoLoad: true,
			fields: ['Код', 'Наименование'],
			proxy: new Ext.data.ScriptTagProxy({ url: 'https://as-msk-n7077:1337/Справочники/ОтраслевыеСегментыПоМСФО/НайтиПоСсылке/' + ссылка, }),
		});
		win = Ext.create('Справочники.ОтраслевыеСегментыПоМСФО.ФормаЭлемента', {});

		var form = win.down('form');
		count = st.getCount();
		if (count == 0)
		{
			var массивЗначений = строкаЗначений;
		}
		else
		{
			st.on('load', function ()
			{
				var массивЗначений = st.data.items[0].data;
			});
		};

		form.getForm().setValues(массивЗначений);

		if (win)
		{
			win.show();
			return win;
		}
	}
});