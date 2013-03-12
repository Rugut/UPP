Ext.define('Документы.РаспределениеНДСКосвенныхРасходов.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:536px;height:321px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Распределения НДС косвенных расходов',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:520px;height:280px;',
			height: 280,width: 520,
			columns:
			[
				{
					text:'',
					width:'32',
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
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:536px;height:25px;',
			items:
			[
				{
					text:'Движения документа по регистрам',
				},
				{
					text:'Дт/кт',
				},
				'-',
				{
					text:'Структура подчиненности документа',
				},
				{
					text:'Печать по умолчанию',
				},
				'-',
				{
					text:'Дт/кт',
				},
				'-',
			]
		},
	]
});