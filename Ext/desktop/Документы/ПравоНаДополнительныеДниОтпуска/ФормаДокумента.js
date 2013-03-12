Ext.define('Документы.ПравоНаДополнительныеДниОтпуска.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:410px;height:422px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Право на дополнительные дни отпуска',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:410px;height:25px;',
			items:
			[
				{
					text:'',
				},
				{
					text:'Открыть свойства',
				},
				'-',
				'-',
				'-',
				{
					text:'Отмена проведения',
				},
				{
					text:'Структура подчиненности документа',
				},
				{
					text:'Редактировать номер',
				},
				{
					text:'Скопировать',
				},
				{
					text:'Провести',
				},
				'-',
				'-',
				'-',
				{
					text:'Перечитать',
				},
				{
					text:'Отмена проведения',
				},
				'-',
				{
					text:'',
				},
				{
					text:'Найти в списке',
				},
				'-',
				{
					text:'Справка',
				},
				{
					text:'Движения документа по регистрам',
				},
				'-',
				{
					text:'Записать и закрыть',
				},
				{
					text:'Записать',
				},
				{
					text:'Открыть категории',
				},
				'-',
				{
					text:'Открыть категории',
				},
				{
					text:'Найти в списке',
				},
				{
					text:'Закрыть',
				},
				{
					text:'Провести',
				},
				'-',
				{
					text:'Открыть свойства',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:397px;width:410px;height:25px;',
			items:
			[
				'-',
				{
					text:'Закрыть',
				},
				{
					text:'OK',
				},
				{
					text:'Записать',
				},
				'-',
			]
		},
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
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:98px;width:394px;height:220px;',
			height: 220,width: 394,
			columns:
			[
				{
					text:'N',
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
					text:'Количество',
					width:'70',
				},
				{
					text:'Примечание',
					width:'100',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:74px;width:394px;height:24px;',
			items:
			[
				{
					text:'Сортировать по возрастанию',
				},
				{
					text:'&Переместить вниз',
				},
				{
					text:'&Удалить',
				},
				{
					text:'Подбор',
				},
				{
					text:'&Изменить',
				},
				'-',
				{
					text:'&Скопировать',
				},
				{
					text:'&Добавить',
				},
				{
					text:'Сортировать по убыванию',
				},
				'-',
				{
					text:'Закончить редактирование',
				},
				'-',
				{
					text:'Списком сотрудников',
				},
				{
					text:'&Переместить вверх',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьОтветственный',
			text: 'Ответственный:',
			style: 'position:absolute;left:8px;top:345px;width:82px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:96px;top:345px;width:306px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКомментарий',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:370px;width:82px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:96px;top:370px;width:306px;height:19px;',
		},
	]
});