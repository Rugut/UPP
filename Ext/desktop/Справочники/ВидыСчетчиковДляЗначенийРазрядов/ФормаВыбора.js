Ext.define('Справочники.ВидыСчетчиковДляЗначенийРазрядов.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	height: 300,width: 602,
	iconCls: 'bogus',
	title: 'Справочник Виды счетчиков для значений разрядов',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:586px;height:259px;',
			height: 259,width: 586,
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
					text:'РазмерСчетчика',
				},
				{
					text:'НачальноеЗначение',
				},
				{
					text:'КонечноеЗначение',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:602px;height:25px;',
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