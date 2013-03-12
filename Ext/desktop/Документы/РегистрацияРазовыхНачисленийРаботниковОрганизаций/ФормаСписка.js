Ext.define('Документы.РегистрацияРазовыхНачисленийРаботниковОрганизаций.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:1000px;height:300px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Разовые начисления сотрудникам организаций',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:57px;width:984px;height:235px;',
			height: 235,width: 984,
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
					width:'180',
				},
				{
					text:'Месяц начисления',
					width:'84',
				},
				{
					text:'Сотрудники',
					width:'101',
				},
				{
					text:'Ответственный',
					width:'180',
				},
				{
					text:'Комментарий',
					width:'100',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:1000px;height:25px;',
			items:
			[
				'-',
				{
					text:'Действие3',
				},
				{
					text:'Действие7',
				},
				{
					text:'Действие2',
				},
				{
					text:'',
				},
				{
					text:'Действие9',
				},
				{
					text:'Движения документа по регистрам',
				},
				'-',
				{
					text:'Действие6',
				},
				'-',
				{
					text:'Действие14',
				},
				'-',
				{
					text:'Зарплата к выплате (начисленные суммы за вычетом налогов)',
				},
				{
					text:'',
				},
				'-',
				'-',
				'-',
				'-',
				{
					text:'Действие11',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие',
				},
				'-',
				{
					text:'Действие8',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие8',
				},
				'-',
				{
					text:'Действие10',
				},
				{
					text:'Действие5',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действие6',
				},
				{
					text:'Действие12',
				},
				'-',
				'-',
				{
					text:'',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие5',
				},
				'-',
				'-',
				{
					text:'Действие1',
				},
				{
					text:'Зарплата к выплате (начисленные суммы)',
				},
				{
					text:'Действие13',
				},
				'-',
				{
					text:'',
				},
				{
					text:'Действие3',
				},
				{
					text:'Структура подчиненности документа',
				},
				'-',
				'-',
				{
					text:'Действие9',
				},
				{
					text:'Действие7',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действие10',
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