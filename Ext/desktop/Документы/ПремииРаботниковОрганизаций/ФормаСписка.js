Ext.define('Документы.ПремииРаботниковОрганизаций.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:1000px;height:421px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Премии сотрудникам организаций',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:57px;width:984px;height:356px;',
			height: 356,width: 984,
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
					width:'121',
				},
				{
					text:'Месяц начисления',
					width:'80',
				},
				{
					text:'Вид расчета',
					width:'120',
				},
				{
					text:'Число месяцев',
					width:'28',
				},
				{
					text:'Дата начала',
					width:'80',
				},
				{
					text:'Дата окончания',
					width:'80',
				},
				{
					text:'Сотрудники',
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
			style: 'position:absolute;left:0px;top:0px;width:1000px;height:25px;',
			items:
			[
				{
					text:'Движения документа по регистрам',
				},
				{
					text:'Действие24',
				},
				{
					text:'',
				},
				'-',
				{
					text:'Структура подчиненности документа',
				},
				'-',
				'-',
				'-',
				{
					text:'Действие17',
				},
				{
					text:'Действие19',
				},
				{
					text:'Действие26',
				},
				{
					text:'Действие11',
				},
				'-',
				{
					text:'Действие20',
				},
				'-',
				{
					text:'Действие28',
				},
				'-',
				'-',
				{
					text:'Действие23',
				},
				{
					text:'Действие19',
				},
				{
					text:'Действие16',
				},
				'-',
				{
					text:'Зарплата к выплате (начисленные суммы)',
				},
				{
					text:'Печать',
				},
				{
					text:'Действие18',
				},
				'-',
				{
					text:'Действие29',
				},
				{
					text:'Действие16',
				},
				'-',
				{
					text:'Действие27',
				},
				{
					text:'Действие25',
				},
				{
					text:'Действие15',
				},
				{
					text:'Действие22',
				},
				{
					text:'',
				},
				'-',
				{
					text:'Действие21',
				},
				'-',
				{
					text:'Действие21',
				},
				'-',
				{
					text:'Действие14',
				},
				'-',
				{
					text:'',
				},
				'-',
				{
					text:'',
				},
				{
					text:'Действие18',
				},
				{
					text:'Действие13',
				},
				{
					text:'Действие15',
				},
				{
					text:'Действие12',
				},
				'-',
				{
					text:'Действие20',
				},
				{
					text:'',
				},
				{
					text:'Зарплата к выплате (начисленные суммы за вычетом налогов)',
				},
				{
					text:'Действие17',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:33px;width:984px;height:19px;',
			height: 19,width: 984,
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
	]
});