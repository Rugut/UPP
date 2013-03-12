Ext.define('Документы.РеализацияОтгруженныхТоваров.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:780px;height:421px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Реализация отгруженных товаров',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:764px;height:380px;',
			height: 380,width: 764,
			columns:
			[
				{
					text:'',
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
					text:'Дата',
					width:'132',
				},
				{
					text:'Номер',
					width:'80',
				},
				{
					text:'Сумма ',
					width:'80',
				},
				{
					text:'Валюта',
					width:'50',
				},
				{
					text:'Контрагент',
					width:'120',
				},
				{
					text:'Договор контрагента',
					width:'120',
				},
				{
					text:'Сделка',
					width:'120',
				},
				{
					text:'Документ отгрузки',
					width:'100',
				},
				{
					text:'Организация',
					width:'120',
				},
				{
					text:'Ответственный',
					width:'120',
				},
				{
					text:'Комментарий',
					width:'100',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:780px;height:25px;',
			items:
			[
				{
					text:'Дт/кт',
				},
				{
					text:'Дт/кт',
				},
				{
					text:'Дт/кт',
				},
				'-',
				{
					text:'Движения документа по регистрам',
				},
			]
		},
	]
});