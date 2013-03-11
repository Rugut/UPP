Ext.define('Справочники.ВидыСчетчиковДляЗначенийРазрядов.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	height: 300,width: 571,
	iconCls: 'bogus',
	title: 'Справочник Виды счетчиков для значений разрядов',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:555px;height:259px;',
			height: 259,width: 555,
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
			style: 'position:absolute;left:0px;top:0px;width:571px;height:25px;',
			items:
			[
			]
		},
	]
});