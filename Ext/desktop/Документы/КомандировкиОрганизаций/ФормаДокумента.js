Ext.define('Документы.КомандировкиОрганизаций.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:652px;height:480px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Командировки организации',
	
	items:
	[
		{
			xtype: 'label',
			name: 'НадписьНомер',
			text: 'Номер:',
			style: 'position:absolute;left:8px;top:33px;width:86px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДата',
			text: 'от:',
			style: 'position:absolute;left:176px;top:33px;width:20px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:96px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:196px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:8px;top:57px;width:86px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:96px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКомментарий',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:428px;width:86px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:96px;top:428px;width:548px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:652px;height:25px;',
			items:
			[
				'-',
				{
					text:'Движения документа по регистрам',
				},
				'-',
				{
					text:'Открыть начисления',
				},
				'-',
				{
					text:'Редактировать номер',
				},
				'-',
				{
					text:'Открыть категории',
				},
				{
					text:'Открыть свойства',
				},
				{
					text:'Структура подчиненности документа',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:268px;top:455px;width:384px;height:25px;',
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
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:244px;width:636px;height:140px;',
			height: 140,width: 636,
			columns:
			[
				{
					text:'№',
					width:'28',
				},
				{
					text:'Таб. №',
					width:'90',
				},
				{
					text:'Сотрудник',
					width:'179',
				},
				{
					text:'Освобождать ставку',
					width:'76',
				},
				{
					text:'C ...',
					width:'80',
				},
				{
					text:'По',
					width:'80',
				},
				{
					text:'Время нахождения в пути (дней)',
					width:'100',
				},
				{
					text:'Напомнить ',
					width:'62',
				},
				{
					text:'Цель',
					width:'138',
				},
				{
					text:'Источник финансирования',
					width:'115',
				},
				{
					text:'Сторно',
					width:'100',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:220px;width:636px;height:24px;',
			items:
			[
				{
					text:'Скопировать',
				},
				{
					text:'Действие13',
				},
				{
					text:'Удалить',
				},
				'-',
				{
					text:'Действие14',
				},
				{
					text:'Подбор',
				},
				{
					text:'Добавить',
				},
				'-',
				{
					text:'Действие16',
				},
				{
					text:'Списком сотрудников',
				},
				{
					text:'Изменить',
				},
				{
					text:'Действие17',
				},
				{
					text:'Действие15',
				},
				'-',
				'-',
			]
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Страна, город:',
			style: 'position:absolute;left:16px;top:105px;width:78px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВвода1',
			style: 'position:absolute;left:96px;top:105px;width:548px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'Организация:',
			style: 'position:absolute;left:16px;top:129px;width:78px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВвода2',
			style: 'position:absolute;left:96px;top:129px;width:548px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтветственный',
			text: 'Ответственный:',
			style: 'position:absolute;left:336px;top:57px;width:86px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:424px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОснованиеКомандировки',
			style: 'position:absolute;left:96px;top:177px;width:548px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись3',
			text: 'Основание:',
			style: 'position:absolute;left:16px;top:177px;width:78px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПредупреждение',
			text: '',
			style: 'position:absolute;left:30px;top:389px;width:401px;height:33px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:431px;top:389px;width:83px;height:33px;',
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
			style: 'position:absolute;left:515px;top:389px;width:129px;height:33px;',
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
			style: 'position:absolute;left:0px;top:455px;width:268px;height:25px;',
			items:
			[
				{
					text:'Весь документ',
				},
				'-',
				'-',
				{
					text:'Строки текущего сотрудника',
				},
				{
					text:'Отменить исправление',
				},
				{
					text:'Строки нескольких сотрудников',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:49px;top:331px;width:389px;height:24px;',
			items:
			[
				{
					text:'Удалить',
				},
				{
					text:'Действие12',
				},
				'-',
				{
					text:'',
				},
				'-',
				{
					text:'Действие4',
				},
				{
					text:'Действие5',
				},
				{
					text:'Действие10',
				},
				{
					text:'Действие6',
				},
				{
					text:'',
				},
				{
					text:'Действие14',
				},
				{
					text:'Добавить',
				},
				{
					text:'Действие8',
				},
				{
					text:'Действие13',
				},
				{
					text:'Действие9',
				},
				{
					text:'Изменить',
				},
				{
					text:'Скопировать',
				},
				{
					text:'Действие7',
				},
				'-',
			]
		},
	]
});