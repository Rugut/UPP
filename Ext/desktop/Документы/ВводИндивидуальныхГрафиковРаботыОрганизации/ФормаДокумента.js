Ext.define('Документы.ВводИндивидуальныхГрафиковРаботыОрганизации.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:1000px;height:486px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Ввод индивидуальных графиков работы организации',
	
	items:
	[
		{
			xtype: 'label',
			name: 'НадписьНомер',
			text: 'Номер:',
			style: 'position:absolute;left:8px;top:33px;width:40px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:48px;top:33px;width:78px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДата',
			text: 'от:',
			style: 'position:absolute;left:137px;top:33px;width:19px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:159px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:294px;top:33px;width:85px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:379px;top:33px;width:169px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПодразделение',
			text: 'Подразделение:',
			style: 'position:absolute;left:294px;top:57px;width:85px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПодразделениеОрганизации',
			style: 'position:absolute;left:379px;top:57px;width:169px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтветственный',
			text: 'Ответственный:',
			style: 'position:absolute;left:8px;top:57px;width:86px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:96px;top:57px;width:183px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКомментарий',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:434px;width:77px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:85px;top:434px;width:907px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:1000px;height:25px;',
			items:
			[
				{
					text:'Действие5',
				},
				{
					text:'Структура подчиненности документа',
				},
				{
					text:'Действие4',
				},
				'-',
				'-',
				{
					text:'',
				},
				{
					text:'',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие2',
				},
				'-',
				{
					text:'Действие6',
				},
				{
					text:'Действие',
				},
				{
					text:'Движения документа по регистрам',
				},
				'-',
				{
					text:'',
				},
				'-',
				'-',
				{
					text:'Действие3',
				},
				{
					text:'Действие7',
				},
				{
					text:'Графики работы по видам времени',
				},
				'-',
				{
					text:'Действие1',
				},
				'-',
				{
					text:'Редактировать номер',
				},
				{
					text:'Действие3',
				},
				'-',
				'-',
				'-',
				'-',
				{
					text:'Действие1',
				},
				'-',
				{
					text:'Действие5',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действие6',
				},
				'-',
				{
					text:'',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:461px;width:1000px;height:25px;',
			items:
			[
				'-',
				{
					text:'Записать',
				},
				{
					text:'OK',
				},
				'-',
				{
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:196px;width:984px;height:24px;',
			items:
			[
				{
					text:'Действие8',
				},
				'-',
				'-',
				{
					text:'Вечерние',
				},
				'-',
				{
					text:'Ночные',
				},
				{
					text:'Действие3',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действие1',
				},
				'-',
				{
					text:'Действие5',
				},
				{
					text:'Подбор',
				},
				{
					text:'По списку сотрудников',
				},
				'-',
				{
					text:'По всем сотрудникам',
				},
				'-',
				{
					text:'Действие6',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие9',
				},
				{
					text:'Действие7',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:220px;width:984px;height:208px;',
			height: 208,width: 984,
			columns:
			[
				{
					text:'№',
					width:'28',
				},
				{
					text:'Таб. №',
					width:'68',
				},
				{
					text:'Сотрудник',
					width:'200',
				},
				{
					text:'Итого
дней     часов',
					width:'82',
				},
				{
					text:'',
					width:'40',
				},
				{
					text:'',
					width:'40',
				},
				{
					text:'',
					width:'82',
				},
				{
					text:'',
					width:'82',
				},
				{
					text:'Часов за день',
					width:'93',
				},
				{
					text:'Из них вечерних',
					width:'93',
				},
				{
					text:'Из них ночных',
					width:'93',
				},
				{
					text:'1',
					width:'43',
				},
				{
					text:'ВЧ',
					width:'43',
				},
				{
					text:'Н',
					width:'43',
				},
				{
					text:'2',
					width:'43',
				},
				{
					text:'ВЧ',
					width:'43',
				},
				{
					text:'Н',
					width:'43',
				},
				{
					text:'3',
					width:'43',
				},
				{
					text:'ВЧ',
					width:'43',
				},
				{
					text:'Н',
					width:'43',
				},
				{
					text:'4',
					width:'43',
				},
				{
					text:'ВЧ',
					width:'43',
				},
				{
					text:'Н',
					width:'43',
				},
				{
					text:'5',
					width:'43',
				},
				{
					text:'ВЧ',
					width:'43',
				},
				{
					text:'Н',
					width:'43',
				},
				{
					text:'6',
					width:'43',
				},
				{
					text:'ВЧ',
					width:'43',
				},
				{
					text:'Н',
					width:'43',
				},
				{
					text:'7',
					width:'43',
				},
				{
					text:'ВЧ',
					width:'43',
				},
				{
					text:'Н',
					width:'43',
				},
				{
					text:'8',
					width:'43',
				},
				{
					text:'ВЧ',
					width:'43',
				},
				{
					text:'Н',
					width:'43',
				},
				{
					text:'9',
					width:'43',
				},
				{
					text:'ВЧ',
					width:'43',
				},
				{
					text:'Н',
					width:'43',
				},
				{
					text:'10',
					width:'43',
				},
				{
					text:'ВЧ',
					width:'43',
				},
				{
					text:'Н',
					width:'43',
				},
				{
					text:'11',
					width:'43',
				},
				{
					text:'ВЧ',
					width:'43',
				},
				{
					text:'Н',
					width:'43',
				},
				{
					text:'12',
					width:'43',
				},
				{
					text:'ВЧ',
					width:'43',
				},
				{
					text:'Н',
					width:'43',
				},
				{
					text:'13',
					width:'43',
				},
				{
					text:'ВЧ',
					width:'43',
				},
				{
					text:'Н',
					width:'43',
				},
				{
					text:'14',
					width:'43',
				},
				{
					text:'ВЧ',
					width:'43',
				},
				{
					text:'Н',
					width:'43',
				},
				{
					text:'15',
					width:'43',
				},
				{
					text:'ВЧ',
					width:'43',
				},
				{
					text:'Н',
					width:'43',
				},
				{
					text:'16',
					width:'43',
				},
				{
					text:'ВЧ',
					width:'43',
				},
				{
					text:'Н',
					width:'43',
				},
				{
					text:'17',
					width:'43',
				},
				{
					text:'ВЧ',
					width:'43',
				},
				{
					text:'Н',
					width:'43',
				},
				{
					text:'18',
					width:'43',
				},
				{
					text:'ВЧ',
					width:'43',
				},
				{
					text:'Н',
					width:'43',
				},
				{
					text:'19',
					width:'43',
				},
				{
					text:'ВЧ',
					width:'43',
				},
				{
					text:'Н',
					width:'43',
				},
				{
					text:'20',
					width:'43',
				},
				{
					text:'ВЧ',
					width:'43',
				},
				{
					text:'Н',
					width:'43',
				},
				{
					text:'21',
					width:'43',
				},
				{
					text:'ВЧ',
					width:'43',
				},
				{
					text:'Н',
					width:'43',
				},
				{
					text:'22',
					width:'43',
				},
				{
					text:'ВЧ',
					width:'43',
				},
				{
					text:'Н',
					width:'43',
				},
				{
					text:'23',
					width:'43',
				},
				{
					text:'ВЧ',
					width:'43',
				},
				{
					text:'Н',
					width:'43',
				},
				{
					text:'24',
					width:'43',
				},
				{
					text:'ВЧ',
					width:'43',
				},
				{
					text:'Н',
					width:'43',
				},
				{
					text:'25',
					width:'43',
				},
				{
					text:'ВЧ',
					width:'43',
				},
				{
					text:'Н',
					width:'43',
				},
				{
					text:'26',
					width:'43',
				},
				{
					text:'ВЧ',
					width:'43',
				},
				{
					text:'Н',
					width:'43',
				},
				{
					text:'27',
					width:'43',
				},
				{
					text:'ВЧ',
					width:'43',
				},
				{
					text:'Н',
					width:'43',
				},
				{
					text:'28',
					width:'43',
				},
				{
					text:'ВЧ',
					width:'43',
				},
				{
					text:'Н',
					width:'43',
				},
				{
					text:'29',
					width:'43',
				},
				{
					text:'ВЧ',
					width:'43',
				},
				{
					text:'Н',
					width:'43',
				},
				{
					text:'30',
					width:'43',
				},
				{
					text:'ВЧ',
					width:'43',
				},
				{
					text:'Н',
					width:'43',
				},
				{
					text:'31',
					width:'43',
				},
				{
					text:'ВЧ',
					width:'43',
				},
				{
					text:'Н',
					width:'43',
				},
				{
					text:'Всего дней',
					width:'100',
				},
				{
					text:'Всего часов',
					width:'100',
				},
				{
					text:'Всего часов вечерних',
					width:'137',
				},
				{
					text:'Всего часов ночных',
					width:'132',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:92px;width:984px;height:82px;',
			height: 82,width: 984,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьПериодРегистрации',
			text: 'Месяц:',
			style: 'position:absolute;left:8px;top:9px;width:40px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПериодРегистрации',
			style: 'position:absolute;left:52px;top:9px;width:162px;height:19px;',
		},
					]
				},
			]
		},
	]
});