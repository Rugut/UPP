Ext.define('Документы.КорректировкаРеализации.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:780px;height:420px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Корректировки реализации',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:32px;width:764px;height:380px;',
			height: 380,width: 764,
			columns:
			[
				{
					text:' ',
					width:'32',
				},
				{
					text:'УУ',
					width:'25',
				},
				{
					text:'БУ',
					width:'25',
				},
				{
					text:'НУ',
					width:'25',
				},
				{
					text:'Только НДС',
					width:'74',
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
					text:'Вид операции',
					width:'120',
				},
				{
					text:'Сумма',
					width:'80',
				},
				{
					text:'Валюта',
					width:'50',
				},
				{
					text:'Организация',
					width:'120',
				},
				{
					text:'Документ реализации',
					width:'150',
				},
				{
					text:'Статья прочих доходов и расходов',
					width:'100',
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
			style: 'position:absolute;left:0px;top:0px;width:780px;height:25px;',
			items:
			[
				'-',
				{
					text:'Структура подчиненности документа',
				},
				{
					text:'Печать по умолчанию',
				},
				{
					text:'Дт/кт',
				},
				{
					text:'Дт/кт',
				},
				'-',
				'-',
				{
					text:'Движения документа по регистрам',
				},
			]
		},
	]
});