Ext.define('Документы.ОпределениеФинансовыхРезультатов.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:503px;height:421px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Определение финансовых результатов',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:481px;height:380px;',
			height: 380,width: 481,
			columns:
			[
				{
					text:'',
					width:'32',
				},
				{
					text:'БУ',
					width:'21',
				},
				{
					text:'НУ',
					width:'21',
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
					text:'Период',
					width:'115',
				},
				{
					text:'Организация',
					width:'120',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:503px;height:25px;',
			items:
			[
				'-',
				{
					text:'Печать по умолчанию',
				},
				{
					text:'Дт/кт',
				},
				{
					text:'Дт/кт',
				},
				{
					text:'Структура подчиненности документа',
				},
				{
					text:'Движения документа по регистрам',
				},
			]
		},
	]
});