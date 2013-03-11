Ext.define('Справочники.ОтправкиФСС.ФормаСпискаОбщая',
	{
	extend: 'Ext.window.Window',
	height: 300,width: 400,
	iconCls: 'bogus',
	title: 'Справочник Отправки в ФСС',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:384px;height:259px;',
			height: 259,width: 384,
			columns:
			[
				{
					text:'Картинка',
				},
				{
					text:'ДатаОтправки',
				},
				{
					text:'СтатусОтправки',
				},
				{
					text:'Организация',
				},
				{
					text:'ОтчетСсылка',
				},
				{
					text:'ИдентификаторОтправкиНаСервере',
				},
				{
					text:'ДатаПолученияРезультата',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:400px;height:25px;',
			items:
			[
				{
					text:'ДействияФормыВыбрать',
				},
				{
					text:'Разделитель',
				},
			]
		},
	]
});