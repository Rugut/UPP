Ext.define('Документы.НачислениеДивидендовОрганизаций.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:780px;height:421px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Начисления дивидендов организации',
	
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
					text:'Дата',
					width:'132',
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
					text:'Месяц начисления',
					width:'110',
				},
				{
					text:'Дивиденды начисляемые',
					width:'120',
				},
				{
					text:'Дивиденды полученные',
					width:'120',
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
					text:'Действие9',
				},
				'-',
				{
					text:'Действие3',
				},
				'-',
				'-',
				'-',
				'-',
				{
					text:'Действие',
				},
				'-',
				{
					text:'Действие5',
				},
				{
					text:'Действие2',
				},
				'-',
				{
					text:'Действие8',
				},
				{
					text:'Действие13',
				},
				{
					text:'Действие11',
				},
				'-',
				'-',
				{
					text:'Зарплата к выплате (начисленные суммы)',
				},
				{
					text:'Действие10',
				},
				{
					text:'Действие10',
				},
				'-',
				{
					text:'Действие9',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действие5',
				},
				'-',
				{
					text:'Действие12',
				},
				{
					text:'Действие',
				},
				{
					text:'',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие8',
				},
				{
					text:'Действие6',
				},
				{
					text:'Действие14',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действие3',
				},
				{
					text:'Действие7',
				},
				{
					text:'',
				},
				{
					text:'Структура подчиненности документа',
				},
				'-',
				{
					text:'',
				},
				{
					text:'Действие7',
				},
				'-',
				{
					text:'Действие1',
				},
				{
					text:'Действие11',
				},
				'-',
				{
					text:'Действие6',
				},
				{
					text:'',
				},
				{
					text:'Действие1',
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