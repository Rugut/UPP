Ext.define('Документы.ABCКлассификацияПокупателей.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:760px;height:421px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'ABC-классификации покупателей',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:744px;height:380px;',
			height: 380,width: 744,
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
					text:'Начало',
					width:'80',
				},
				{
					text:'Окончание',
					width:'80',
				},
				{
					text:'% А класса',
					width:'60',
				},
				{
					text:'% B класса',
					width:'60',
				},
				{
					text:'% С класса',
					width:'60',
				},
				{
					text:'Комментарий',
					width:'160',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:760px;height:25px;',
			items:
			[
				'-',
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