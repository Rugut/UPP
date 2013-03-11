Ext.define('Справочники.ХранилищеДополнительнойИнформации.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	height: 261,width: 716,
	iconCls: 'bogus',
	title: 'Дополнительная информация',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:700px;height:220px;',
			height: 220,width: 700,
			columns:
			[
				{
					text:'Картинка',
				},
				{
					text:'Объект',
				},
				{
					text:'ВидДанных',
				},
				{
					text:'ИмяФайла',
				},
				{
					text:'Наименование',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:716px;height:25px;',
			items:
			[
			]
		},
	]
});