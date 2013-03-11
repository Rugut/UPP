Ext.define('Справочники.КассыККМ.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	height: 360,width: 529,
	iconCls: 'bogus',
	title: 'Кассы ККМ',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:513px;height:319px;',
			height: 319,width: 513,
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
					text:'Владелец',
				},
				{
					text:'ФормироватьНефискальныеЧеки',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:529px;height:25px;',
			items:
			[
				{
					text:'Разделитель5',
				},
			]
		},
	]
});