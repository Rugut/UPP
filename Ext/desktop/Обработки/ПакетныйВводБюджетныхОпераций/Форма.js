Ext.define('Обработки.ПакетныйВводБюджетныхОпераций.Форма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:780px;height:450px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Обработка  Пакетный ввод бюджетных операций',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:780px;height:25px;',
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:425px;width:780px;height:25px;',
			items:
			[
				{
					text:'Закрыть',
				},
				{
					text:'Выполнить',
				},
				'-',
			]
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Сценарий:',
			style: 'position:absolute;left:8px;top:33px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Сценарий',
			style: 'position:absolute;left:96px;top:33px;width:220px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:57px;width:764px;height:360px;',
			height: 360,width: 764,
			items:
			[
				{
					title:'Бюджетные операции',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:750px;height:154px;',
			height: 154,width: 750,
			columns:
			[
				{
					text:'N',
					width:'28',
				},
				{
					text:'Период',
					width:'100',
				},
				{
					text:'Статья оборотов',
					width:'100',
				},
				{
					text:'Количество',
					width:'100',
				},
				{
					text:'Цена',
					width:'100',
				},
				{
					text:'Сумма',
					width:'100',
				},
				{
					text:'Валюта',
					width:'100',
				},
				{
					text:'ЦФО',
					width:'100',
				},
				{
					text:'Проект',
					width:'100',
				},
				{
					text:'Контрагент',
					width:'100',
				},
				{
					text:'Номенклатура',
					width:'100',
				},
				{
					text:'Состояние',
					width:'100',
				},
				{
					text:'Ответственный',
					width:'100',
				},
				{
					text:'Комментарий',
					width:'100',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:750px;height:24px;',
			items:
			[
				{
					text:'Сортировать по убыванию',
				},
				{
					text:'&Изменить',
				},
				{
					text:'Сортировать по возрастанию',
				},
				{
					text:'&Удалить',
				},
				{
					text:'&Добавить',
				},
				{
					text:'&Переместить вверх',
				},
				{
					text:'Закончить редактирование',
				},
				{
					text:'&Переместить вниз',
				},
				{
					text:'&Скопировать',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:210px;width:750px;height:124px;',
			height: 124,width: 750,
			columns:
			[
			]
		},
					]
				},
				{
					title:'Общие реквизиты бюджетных операций',
					items:
					[
		{
			xtype: 'checkbox',
			boxLabel: 'Период планирования:',
			style: 'position:absolute;left:6px;top:6px;width:136px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Статья оборотов:',
			style: 'position:absolute;left:6px;top:30px;width:136px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СтатьяОборотов',
			style: 'position:absolute;left:142px;top:30px;width:236px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВалютаДокумента',
			style: 'position:absolute;left:520px;top:30px;width:236px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Валюта операции:',
			style: 'position:absolute;left:408px;top:30px;width:112px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'ЦФО:',
			style: 'position:absolute;left:6px;top:54px;width:136px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ЦФО',
			style: 'position:absolute;left:142px;top:54px;width:236px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Проект:',
			style: 'position:absolute;left:408px;top:54px;width:112px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Проект',
			style: 'position:absolute;left:520px;top:54px;width:236px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Контрагент:',
			style: 'position:absolute;left:6px;top:78px;width:136px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Контрагент',
			style: 'position:absolute;left:142px;top:78px;width:236px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Номенклатура:',
			style: 'position:absolute;left:408px;top:78px;width:112px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номенклатура',
			style: 'position:absolute;left:520px;top:78px;width:236px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Ответственный:',
			style: 'position:absolute;left:6px;top:102px;width:136px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:142px;top:102px;width:236px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Состояние:',
			style: 'position:absolute;left:408px;top:102px;width:112px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Состояние',
			style: 'position:absolute;left:520px;top:102px;width:236px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Комментарий:',
			style: 'position:absolute;left:6px;top:126px;width:136px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:142px;top:126px;width:614px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПериодПланирования',
			style: 'position:absolute;left:142px;top:6px;width:100px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Период',
			text: '',
			style: 'position:absolute;left:160px;top:6px;width:115px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'ПлюсПериод',
			text: '+',
			style: 'position:absolute;left:274px;top:6px;width:19px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'МинусПериод',
			text: '-',
			style: 'position:absolute;left:142px;top:6px;width:19px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'ВыборПериода',
			text: '',
			style: 'position:absolute;left:294px;top:6px;width:15px;height:19px;',
		},
					]
				},
				{
					title:'Сформированные документы',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:750px;height:304px;',
			height: 304,width: 750,
			columns:
			[
				{
					text:'N',
					width:'28',
				},
				{
					text:'Бюджетная операция',
					width:'265',
				},
				{
					text:'Статья оборотов',
					width:'183',
				},
				{
					text:'Валюта',
					width:'124',
				},
				{
					text:'Сумма',
					width:'143',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:750px;height:24px;',
			items:
			[
				{
					text:'Очистить',
				},
				'-',
				{
					text:'Провести',
				},
				{
					text:'&Удалить',
				},
				{
					text:'Установить пометки',
				},
				{
					text:'Снять пометки',
				},
				'-',
			]
		},
					]
				},
			]
		},
	]
});