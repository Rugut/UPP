Ext.define('Документы.РасчетПоМоделиБюджетирования.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:600px;height:421px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Расчеты по моделям бюджетирования',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:584px;height:380px;',
			height: 380,width: 584,
			columns:
			[
				{
					text:'',
					width:'32',
				},
				{
					text:'Дата',
					width:'132',
				},
				{
					text:'Номер',
					width:'80',
				},
				{
					text:'Дата расчета',
					width:'80',
				},
				{
					text:'Сценарий',
					width:'120',
				},
				{
					text:'Пересчитывать регламентно',
					width:'49',
				},
				{
					text:'Основной источник данных',
					width:'91',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:600px;height:25px;',
			items:
			[
				'-',
				{
					text:'Движения документа по регистрам',
				},
				{
					text:'Структура подчиненности документа',
				},
			]
		},
	]
});