Ext.define('Справочники.Валюты.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	height: 300,width: 494,
	iconCls: 'bogus',
	title: 'Валюты',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:478px;height:259px;',
			height: 259,width: 478,
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
					text:'НаименованиеПолное',
				},
				{
					text:'ПараметрыПрописиНаРусском',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:494px;height:25px;',
			items:
			[
				{
					text:'Действие',
				},
				{
					text:'Разделитель',
				},
			]
		},
	]
});