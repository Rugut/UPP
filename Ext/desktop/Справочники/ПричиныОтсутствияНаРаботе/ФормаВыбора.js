Ext.define('Справочники.ПричиныОтсутствияНаРаботе.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	height: 300,width: 455,
	iconCls: 'bogus',
	title: 'Причины отсутствия на работе',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:439px;height:259px;',
			height: 259,width: 439,
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
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:455px;height:25px;',
			items:
			[
				{
					text:'РедактироватьКодНомер',
				},
				{
					text:'Подменю',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'Разделитель',
				},
				{
					text:'ДействияФормыВыбрать',
				},
			]
		},
	]
});