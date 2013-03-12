Ext.define('Документы.ВводРаспределенияЗаработкаРаботников.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:608px;height:450px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Ввод распределения заработка сотрудников',
	
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
			style: 'position:absolute;left:94px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:194px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКомментарий',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:398px;width:84px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:94px;top:398px;width:506px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтветственный',
			text: 'Ответственный:',
			style: 'position:absolute;left:8px;top:57px;width:84px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:94px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:241px;width:592px;height:24px;',
			items:
			[
				{
					text:'&Изменить',
				},
				'-',
				{
					text:'Закончить редактирование',
				},
				'-',
				{
					text:'Сортировать по возрастанию',
				},
				{
					text:'&Добавить',
				},
				{
					text:'&Переместить вниз',
				},
				{
					text:'&Переместить вверх',
				},
				{
					text:'&Скопировать',
				},
				{
					text:'Сортировать по убыванию',
				},
				{
					text:'&Удалить',
				},
				{
					text:'По сотруднику',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:265px;width:592px;height:128px;',
			height: 128,width: 592,
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
					width:'120',
				},
				{
					text:'Упр. учет',
					width:'120',
				},
				{
					text:'% доли распределения',
					width:'88',
				},
				{
					text:'Подразделение',
					width:'100',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:608px;height:25px;',
			items:
			[
				{
					text:'Действие открыть категории',
				},
				{
					text:'Движения документа по регистрам',
				},
				'-',
				{
					text:'Структура подчиненности документа',
				},
				'-',
				'-',
				{
					text:'Действие открыть свойства',
				},
				{
					text:'Редактировать номер',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:425px;width:608px;height:25px;',
			items:
			[
				{
					text:'OK',
				},
				{
					text:'Записать',
				},
				'-',
				'-',
				{
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьПериод',
			text: 'Месяц:',
			style: 'position:absolute;left:438px;top:33px;width:40px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Период',
			style: 'position:absolute;left:480px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДата',
			text: 'от:',
			style: 'position:absolute;left:176px;top:33px;width:16px;height:19px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:119px;width:592px;height:97px;',
			height: 97,width: 592,
			columns:
			[
				{
					text:'Таб. №',
					width:'48',
				},
				{
					text:'Сотрудник',
					width:'223',
				},
				{
					text:'Физлицо',
					width:'100',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:95px;width:592px;height:24px;',
			items:
			[
				'-',
				'-',
				{
					text:'Подбор',
				},
				{
					text:'&Переместить вниз',
				},
				{
					text:'&Удалить',
				},
				'-',
				{
					text:'&Изменить',
				},
				{
					text:'Сортировать по возрастанию',
				},
				{
					text:'&Скопировать',
				},
				'-',
				{
					text:'Списком сотрудников',
				},
				'-',
				{
					text:'&Переместить вверх',
				},
				{
					text:'Закончить редактирование',
				},
				{
					text:'&Добавить',
				},
				{
					text:'Сортировать по убыванию',
				},
			]
		},
	]
});