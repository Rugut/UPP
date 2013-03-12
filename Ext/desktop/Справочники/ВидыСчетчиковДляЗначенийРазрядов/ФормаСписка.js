Ext.define('Справочники.ВидыСчетчиковДляЗначенийРазрядов.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:571px;height:300px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
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
					text:'',
					width:'20',
				},
				{
					text:'Код',
					width:'63',
				},
				{
					text:'Наименование',
					width:'156',
				},
				{
					text:'Размер счетчика',
					width:'92',
				},
				{
					text:'Начальное значение',
					width:'110',
				},
				{
					text:'Конечное значение',
					width:'110',
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