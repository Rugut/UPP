Ext.define('Документы.РасходныйКассовыйОрдер.ФормаВыбораВедомостиПоЗарплате',
	{
	extend: 'Ext.window.Window',
	height: 299,width: 711,
	iconCls: 'bogus',
	title: 'Ведомости на выплату заработной платы',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:274px;width:711px;height:25px;',
			items:
			[
				{
					text:'Разделитель1',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие',
				},
				{
					text:'Выбрать',
				},
				{
					text:'Разделитель',
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
				},
				{
					text:'ОрганизацияСсылка',
				},
				{
					text:'ФизлицоСсылка',
				},
				{
					text:'СсылкаПредставление',
				},
				{
					text:'Дата',
				},
				{
					text:'Номер',
				},
				{
					text:'Сумма',
				},
				{
					text:'Организация',
				},
				{
					text:'Физлицо',
				},
				{
					text:'Комментарий',
				},
			]
		},
	]
});