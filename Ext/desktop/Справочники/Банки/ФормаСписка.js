Ext.define('Справочники.Банки.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	height: 401,width: 742,
	iconCls: 'bogus',
	title: 'Банки',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:174px;top:33px;width:560px;height:320px;',
			height: 320,width: 560,
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
					text:'КоррСчет',
				},
				{
					text:'Город',
				},
				{
					text:'Адрес',
				},
				{
					text:'Телефоны',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:160px;height:320px;',
			height: 320,width: 160,
			columns:
			[
				{
					text:'Наименование',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:742px;height:25px;',
			items:
			[
				{
					text:'ДействиеЗагрузить1',
				},
				{
					text:'Разделитель5',
				},
			]
		},
	]
});