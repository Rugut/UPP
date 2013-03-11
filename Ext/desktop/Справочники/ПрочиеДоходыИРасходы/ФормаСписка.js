Ext.define('Справочники.ПрочиеДоходыИРасходы.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	height: 321,width: 780,
	iconCls: 'bogus',
	title: 'Прочие доходы и расходы',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:174px;top:33px;width:599px;height:280px;',
			height: 280,width: 599,
			columns:
			[
				{
					text:'Картинка',
				},
				{
					text:'Код',
				},
				{
					text:'Наименование',
				},
				{
					text:'ВидПрочихДоходовИРасходов',
				},
				{
					text:'ПринятиеКналоговомуУчету',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:160px;height:280px;',
			height: 280,width: 160,
			columns:
			[
				{
					text:'Наименование',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:780px;height:25px;',
			items:
			[
			]
		},
	]
});