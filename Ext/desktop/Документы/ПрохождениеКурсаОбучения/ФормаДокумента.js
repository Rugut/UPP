Ext.define('Документы.ПрохождениеКурсаОбучения.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:510px;height:333px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Прохождение курса обучения',
	
	items:
	[
		{
			xtype: 'label',
			name: 'НадписьНомер',
			text: 'Номер:',
			style: 'position:absolute;left:8px;top:33px;width:86px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:96px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДата',
			text: 'от:',
			style: 'position:absolute;left:178px;top:33px;width:16px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:196px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКурсОбучения',
			text: 'Курс обучения:',
			style: 'position:absolute;left:8px;top:58px;width:86px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КурсОбучения',
			style: 'position:absolute;left:96px;top:58px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКомментарий',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:281px;width:86px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:96px;top:281px;width:406px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтветственный',
			text: 'Ответственный:',
			style: 'position:absolute;left:8px;top:256px;width:86px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:96px;top:256px;width:406px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:99px;width:494px;height:24px;',
			items:
			[
				{
					text:'Списком сотрудников',
				},
				{
					text:'Действие4',
				},
				'-',
				'-',
				'-',
				{
					text:'Действие7',
				},
				'-',
				{
					text:'Подбор',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие6',
				},
				{
					text:'Действие3',
				},
				{
					text:'Действие8',
				},
				{
					text:'Заполнить даты',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие5',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:123px;width:494px;height:127px;',
			height: 127,width: 494,
			columns:
			[
				{
					text:'№',
					width:'32',
				},
				{
					text:'Таб. №',
					width:'75',
				},
				{
					text:'Сотрудник',
					width:'120',
				},
				{
					text:'Дата выдачи документа',
					width:'136',
				},
				{
					text:'Реквизиты',
					width:'80',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:510px;height:25px;',
			items:
			[
				{
					text:'Движения документа по регистрам',
				},
				{
					text:'Редактировать номер',
				},
				{
					text:'',
				},
				{
					text:'Структура подчиненности документа',
				},
				'-',
				'-',
				{
					text:'',
				},
				'-',
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:308px;width:510px;height:25px;',
			items:
			[
				'-',
				'-',
				{
					text:'Записать',
				},
				{
					text:'OK',
				},
				{
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаЗавершенияКурса',
			style: 'position:absolute;left:422px;top:58px;width:80px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Курс пройден:',
			style: 'position:absolute;left:328px;top:58px;width:91px;height:19px;',
		},
	]
});