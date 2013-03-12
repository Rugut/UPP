Ext.define('Справочники.ПрофилиИзмененияПлановПоИзмерениям.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:629px;height:321px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Профили изменения планов по измерениям',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:174px;top:33px;width:447px;height:280px;',
			height: 280,width: 447,
			columns:
			[
				{
					text:'',
					width:'32',
				},
				{
					text:'Код',
					width:'80',
				},
				{
					text:'Наименование',
					width:'161',
				},
				{
					text:'Измерение',
					width:'100',
				},
				{
					text:'Источник данных',
					width:'205',
				},
				{
					text:'Показатель источника',
					width:'124',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:160px;height:280px;',
			height: 280,width: 160,
			columns:
			[
				{
					text:'Наименование',
					width:'120',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:629px;height:25px;',
			items:
			[
			]
		},
	]
});