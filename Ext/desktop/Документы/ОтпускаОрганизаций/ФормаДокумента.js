Ext.define('Документы.ОтпускаОрганизаций.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:642px;height:400px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Отпуска организации',
	
	items:
	[
		{
			xtype: 'label',
			name: 'НадписьНомер',
			text: 'Номер:',
			style: 'position:absolute;left:8px;top:33px;width:76px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДата',
			text: 'от:',
			style: 'position:absolute;left:166px;top:33px;width:20px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:86px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:186px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:8px;top:57px;width:76px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:86px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКомментарий',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:348px;width:76px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:86px;top:348px;width:548px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:642px;height:25px;',
			items:
			[
				{
					text:'Движения документа по регистрам',
				},
				{
					text:'Структура подчиненности документа',
				},
				'-',
				'-',
				{
					text:'Открыть свойства',
				},
				{
					text:'Открыть начисления',
				},
				'-',
				{
					text:'Открыть категории',
				},
				{
					text:'Редактировать номер',
				},
				'-',
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:268px;top:375px;width:374px;height:25px;',
			items:
			[
				{
					text:'OK',
				},
				'-',
				'-',
				{
					text:'Записать',
				},
				{
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:124px;width:626px;height:180px;',
			height: 180,width: 626,
			columns:
			[
				{
					text:'№',
					width:'28',
				},
				{
					text:'Таб. №',
					width:'84',
				},
				{
					text:'Сотрудник',
					width:'120',
				},
				{
					text:'Освобождать ставку',
					width:'76',
				},
				{
					text:'Вид отпуска',
					width:'228',
				},
				{
					text:'C ...',
					width:'91',
				},
				{
					text:'По',
					width:'69',
				},
				{
					text:'Дней, в т.ч. доп.',
					width:'60',
				},
				{
					text:'Напомнить',
					width:'67',
				},
				{
					text:'Вид дополнительного отпуска',
					width:'68',
				},
				{
					text:'Начало дополнительного отпуска',
					width:'106',
				},
				{
					text:'Дней',
					width:'60',
				},
				{
					text:'Рабочий год',
					width:'70',
				},
				{
					text:'по',
					width:'70',
				},
				{
					text:'Основание',
					width:'100',
				},
				{
					text:'Сторно',
					width:'100',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:100px;width:626px;height:24px;',
			items:
			[
				'-',
				{
					text:'Действие7',
				},
				{
					text:'Добавить',
				},
				{
					text:'Действие8',
				},
				{
					text:'Действие5',
				},
				'-',
				'-',
				{
					text:'Действие4',
				},
				{
					text:'Удалить',
				},
				{
					text:'Скопировать',
				},
				{
					text:'Списком сотрудников',
				},
				{
					text:'Изменить',
				},
				{
					text:'Действие6',
				},
				{
					text:'Подбор',
				},
				{
					text:'По графику отпусков',
				},
				'-',
			]
		},
		{
			xtype: 'label',
			name: 'НадписьОтветственный',
			text: 'Ответственный:',
			style: 'position:absolute;left:326px;top:57px;width:86px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:414px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:99px;top:216px;width:389px;height:24px;',
			items:
			[
				{
					text:'Действие7',
				},
				{
					text:'Действие14',
				},
				{
					text:'Действие8',
				},
				{
					text:'Удалить',
				},
				'-',
				{
					text:'Действие5',
				},
				{
					text:'Действие12',
				},
				{
					text:'Действие13',
				},
				{
					text:'',
				},
				'-',
				{
					text:'Скопировать',
				},
				{
					text:'Действие4',
				},
				{
					text:'Добавить',
				},
				{
					text:'Действие10',
				},
				'-',
				{
					text:'',
				},
				{
					text:'Действие9',
				},
				{
					text:'Изменить',
				},
				{
					text:'Действие6',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьПредупреждение',
			text: '',
			style: 'position:absolute;left:30px;top:309px;width:391px;height:33px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:421px;top:309px;width:83px;height:33px;',
			height: 33,width: 83,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьОткрытьИсправление',
			text: 'Открыть исправления',
			style: 'position:absolute;left:0px;top:0px;width:71px;height:33px;',
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:505px;top:309px;width:129px;height:33px;',
			height: 33,width: 129,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьОткрытьИсходный',
			text: 'Открыть исправленный документ',
			style: 'position:absolute;left:0px;top:0px;width:129px;height:33px;',
		},
					]
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:375px;width:268px;height:25px;',
			items:
			[
				{
					text:'Весь документ',
				},
				{
					text:'Строки текущего сотрудника',
				},
				{
					text:'Строки нескольких сотрудников',
				},
				'-',
				{
					text:'Отменить исправление',
				},
				'-',
			]
		},
	]
});