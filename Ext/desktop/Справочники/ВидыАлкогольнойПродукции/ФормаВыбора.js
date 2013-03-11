Ext.define('Справочники.ВидыАлкогольнойПродукции.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	height: 350,width: 650,
	iconCls: 'bogus',
	title: 'Виды алкогольной продукции',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:634px;height:309px;',
			height: 309,width: 634,
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
					text:'КодВидаПродукции',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:650px;height:25px;',
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