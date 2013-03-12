Ext.define('Справочники.ТехнологическиеОперации.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:780px;height:361px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Технологические операции',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:174px;top:33px;width:598px;height:320px;',
			height: 320,width: 598,
			columns:
			[
				{
					text:'',
					width:'35',
				},
				{
					text:'Код',
					width:'40',
				},
				{
					text:'Наименование',
					width:'180',
				},
				{
					text:'Единица',
					width:'54',
				},
				{
					text:'Коэффициент',
					width:'91',
				},
				{
					text:'Расценка',
					width:'60',
				},
				{
					text:'Норма времени',
					width:'100',
				},
				{
					text:'Валюта',
					width:'80',
				},
				{
					text:'Основная статья затрат',
					width:'120',
				},
				{
					text:'Основная номенклатурная группа',
					width:'120',
				},
				{
					text:'Отражение зарплаты в бухучете',
					width:'120',
				},
				{
					text:'Способ распределения затрат на выпуск',
					width:'350',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:780px;height:25px;',
			items:
			[
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
					width:'100',
				},
			]
		},
	]
});