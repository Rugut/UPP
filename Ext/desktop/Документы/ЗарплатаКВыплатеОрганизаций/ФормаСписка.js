Ext.define('Документы.ЗарплатаКВыплатеОрганизаций.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:780px;height:421px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Зарплаты к выплате организации',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:57px;width:764px;height:356px;',
			height: 356,width: 764,
			columns:
			[
				{
					text:'',
					width:'32',
				},
				{
					text:'Оплачена',
					width:'22',
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
					text:'Подразделение',
					width:'120',
				},
				{
					text:'Месяц начисления',
					width:'80',
				},
				{
					text:'Характер выплаты',
					width:'120',
				},
				{
					text:'Документ основание',
					width:'118',
				},
				{
					text:'Сотрудники',
					width:'101',
				},
				{
					text:'Сумма',
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
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:33px;width:764px;height:19px;',
			height: 19,width: 764,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'checkbox',
			boxLabel: 'Организация:',
			style: 'position:absolute;left:0px;top:0px;width:87px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:92px;top:0px;width:220px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:780px;height:25px;',
			items:
			[
				{
					text:'Действие8',
				},
				{
					text:'Действие10',
				},
				'-',
				'-',
				{
					text:'Действие2',
				},
				{
					text:'Действие5',
				},
				{
					text:'Действие11',
				},
				{
					text:'Действие7',
				},
				'-',
				{
					text:'Действие4',
				},
				'-',
				'-',
				{
					text:'Действие1',
				},
				{
					text:'Движения документа по регистрам',
				},
				{
					text:'Действие13',
				},
				'-',
				{
					text:'Действие9',
				},
				{
					text:'Действие3',
				},
				{
					text:'Действие9',
				},
				{
					text:'Структура подчиненности документа',
				},
				'-',
				'-',
				{
					text:'Действие10',
				},
				'-',
				{
					text:'Действие6',
				},
				{
					text:'Действие4',
				},
				'-',
				{
					text:'Действие',
				},
				{
					text:'Действие7',
				},
				'-',
				'-',
				{
					text:'Действие14',
				},
				'-',
				{
					text:'Действие1',
				},
				'-',
				{
					text:'Печать',
				},
				'-',
				{
					text:'Действие8',
				},
				{
					text:'Действие12',
				},
				{
					text:'Действие',
				},
				'-',
				{
					text:'Действие2',
				},
				{
					text:'Действие6',
				},
				'-',
				{
					text:'Действие5',
				},
			]
		},
	]
});