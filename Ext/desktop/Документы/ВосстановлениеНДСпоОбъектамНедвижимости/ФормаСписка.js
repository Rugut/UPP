Ext.define('Документы.ВосстановлениеНДСпоОбъектамНедвижимости.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:606px;height:300px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Восстановления НДС по объектам недвижимости',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:590px;height:259px;',
			height: 259,width: 590,
			columns:
			[
				{
					text:'',
					width:'20',
				},
				{
					text:'Дата',
					width:'120',
				},
				{
					text:'Номер',
					width:'80',
				},
				{
					text:'Организация',
					width:'120',
				},
				{
					text:'Отражать восстановление в книге продаж',
					width:'80',
				},
				{
					text:'Ответственный',
					width:'120',
				},
				{
					text:'Комментарий',
					width:'120',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:606px;height:25px;',
			items:
			[
				{
					text:'Структура подчиненности документа',
				},
				{
					text:'Дт/кт',
				},
				{
					text:'Движения документа по регистрам',
				},
				{
					text:'Дт/кт',
				},
				'-',
				'-',
			]
		},
	]
});