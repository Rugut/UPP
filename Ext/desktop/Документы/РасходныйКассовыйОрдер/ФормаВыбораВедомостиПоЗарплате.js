Ext.define('Документы.РасходныйКассовыйОрдер.ФормаВыбораВедомостиПоЗарплате',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:711px;height:299px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Ведомости на выплату заработной платы',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:274px;width:711px;height:25px;',
			items:
			[
				{
					text:'',
				},
				'-',
				{
					text:'Закрыть',
				},
				'-',
				{
					text:'Справка',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:8px;width:695px;height:258px;',
			height: 258,width: 695,
			columns:
			[
				{
					text:'Ссылка',
					width:'100',
				},
				{
					text:'Организация - ссылка',
					width:'100',
				},
				{
					text:'Физлицо - ссылка',
					width:'100',
				},
				{
					text:'Документ',
					width:'100',
				},
				{
					text:'Дата',
					width:'100',
				},
				{
					text:'Номер',
					width:'100',
				},
				{
					text:'Сумма',
					width:'100',
				},
				{
					text:'Организация',
					width:'100',
				},
				{
					text:'Физлицо',
					width:'100',
				},
				{
					text:'Комментарий',
					width:'100',
				},
			]
		},
	]
});