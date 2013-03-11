Ext.define('Справочники.ТСДФорматыДанных.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	height: 300,width: 495,
	iconCls: 'bogus',
	title: 'Справочник Форматы выгрузки для терминалов сбора данных',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:479px;height:259px;',
			height: 259,width: 479,
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
			style: 'position:absolute;left:0px;top:0px;width:495px;height:25px;',
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