Ext.define('Документы.УчастиеВМероприятиях.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:452px;height:428px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Участие в мероприятиях',
	
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
			name: 'НадписьМероприятие',
			text: 'Мероприятие:',
			style: 'position:absolute;left:8px;top:81px;width:86px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Мероприятие',
			style: 'position:absolute;left:96px;top:81px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКомментарий',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:376px;width:86px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:96px;top:376px;width:348px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:124px;width:436px;height:24px;',
			items:
			[
				'-',
				'-',
				{
					text:'Подбор',
				},
				{
					text:'&Добавить',
				},
				'-',
				{
					text:'&Скопировать',
				},
				{
					text:'&Переместить вверх',
				},
				{
					text:'Закончить редактирование',
				},
				{
					text:'&Удалить',
				},
				{
					text:'&Изменить',
				},
				{
					text:'Списком сотрудников',
				},
				{
					text:'Сортировать по возрастанию',
				},
				{
					text:'&Переместить вниз',
				},
				{
					text:'Сортировать по убыванию',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:148px;width:436px;height:220px;',
			height: 220,width: 436,
			columns:
			[
				{
					text:'№',
					width:'28',
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
					text:'Участвует в ...',
					width:'81',
				},
				{
					text:'Как ...',
					width:'101',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:452px;height:25px;',
			items:
			[
				{
					text:'',
				},
				'-',
				'-',
				{
					text:'Провести',
				},
				{
					text:'',
				},
				{
					text:'Скопировать',
				},
				'-',
				'-',
				'-',
				{
					text:'Записать',
				},
				'-',
				'-',
				{
					text:'Перечитать',
				},
				'-',
				{
					text:'Структура подчиненности документа',
				},
				{
					text:'Закрыть',
				},
				{
					text:'Провести',
				},
				{
					text:'Отмена проведения',
				},
				{
					text:'Скопировать',
				},
				{
					text:'Найти в списке',
				},
				'-',
				{
					text:'',
				},
				{
					text:'Движения документа по регистрам',
				},
				{
					text:'Найти в списке',
				},
				{
					text:'Редактировать номер',
				},
				{
					text:'Записать и закрыть',
				},
				'-',
				{
					text:'Перечитать',
				},
				{
					text:'',
				},
				{
					text:'Отмена проведения',
				},
				{
					text:'Справка',
				},
				'-',
				'-',
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:403px;width:452px;height:25px;',
			items:
			[
				{
					text:'Закрыть',
				},
				'-',
				'-',
				{
					text:'ОК',
				},
				{
					text:'Записать',
				},
			]
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
			style: 'position:absolute;left:96px;top:57px;width:220px;height:19px;',
		},
	]
});