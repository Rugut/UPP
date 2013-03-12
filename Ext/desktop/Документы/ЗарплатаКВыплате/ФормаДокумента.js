Ext.define('Документы.ЗарплатаКВыплате.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:537px;height:524px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Зарплата к выплате',
	
	items:
	[
		{
			xtype: 'label',
			name: 'НадписьНомер',
			text: 'Номер:',
			style: 'position:absolute;left:8px;top:33px;width:84px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:118px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОт',
			text: 'от:',
			style: 'position:absolute;left:198px;top:33px;width:20px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:218px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтветственный',
			text: 'Ответственный:',
			style: 'position:absolute;left:8px;top:59px;width:84px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:118px;top:59px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКомментарий',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:472px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:96px;top:472px;width:433px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:222px;width:521px;height:24px;',
			items:
			[
				'-',
				'-',
				{
					text:'Действие14',
				},
				{
					text:'Подбор списком',
				},
				'-',
				{
					text:'Удалить',
				},
				{
					text:'Удалить пустые',
				},
				{
					text:'Добавить',
				},
				{
					text:'Действие16',
				},
				{
					text:'Действие17',
				},
				{
					text:'Действие15',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:246px;width:521px;height:220px;',
			height: 220,width: 521,
			columns:
			[
				{
					text:'Картинка',
					width:'21',
				},
				{
					text:'Признак автоматического расчета',
					width:'21',
				},
				{
					text:'№',
					width:'31',
				},
				{
					text:'Сотрудник',
					width:'323',
				},
				{
					text:'Сумма',
					width:'104',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:537px;height:25px;',
			items:
			[
				'-',
				{
					text:'Действие1',
				},
				'-',
				{
					text:'Действие4',
				},
				{
					text:'Действие5',
				},
				'-',
				{
					text:'Действие2',
				},
				{
					text:'Структура подчиненности документа',
				},
				'-',
				{
					text:'',
				},
				{
					text:'Действие',
				},
				{
					text:'Провести',
				},
				'-',
				'-',
				'-',
				{
					text:'Движения документа по регистрам',
				},
				'-',
				{
					text:'Перечитать',
				},
				{
					text:'',
				},
				{
					text:'Редактировать номер',
				},
				{
					text:'Действие1',
				},
				'-',
				{
					text:'Действие4',
				},
				{
					text:'Действие3',
				},
				'-',
				{
					text:'Действие3',
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
					text:'Действие1',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:499px;width:537px;height:25px;',
			items:
			[
				'-',
				{
					text:'OK',
				},
				{
					text:'Записать',
				},
				'-',
				{
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:88px;width:521px;height:60px;',
			height: 60,width: 521,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ХарактерВыплаты',
			style: 'position:absolute;left:110px;top:31px;width:400px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Подразделение',
			style: 'position:absolute;left:110px;top:6px;width:400px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьХарактерВыплаты',
			text: 'Выплачивать:',
			style: 'position:absolute;left:6px;top:31px;width:80px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'button',
			name: 'КнопкаЗаполнить',
			text: 'Заполнить',
			style: 'position:absolute;left:8px;top:159px;width:116px;height:35px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПараметрыЗаполнения',
			text: '',
			style: 'position:absolute;left:157px;top:159px;width:372px;height:35px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:49px;top:341px;width:458px;height:24px;',
			items:
			[
				{
					text:'',
				},
				'-',
				{
					text:'Действие',
				},
				'-',
				{
					text:'Действие1',
				},
				{
					text:'Действие5',
				},
				{
					text:'Действие6',
				},
				{
					text:'Вывести список...',
				},
				{
					text:'Настройка списка...',
				},
				{
					text:'',
				},
				{
					text:'Действие2',
				},
				'-',
			]
		},
	]
});