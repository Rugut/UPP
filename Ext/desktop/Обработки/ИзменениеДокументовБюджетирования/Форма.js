Ext.define('Обработки.ИзменениеДокументовБюджетирования.Форма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:644px;height:450px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Изменение документов бюджетирования',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:644px;height:25px;',
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:425px;width:644px;height:25px;',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Выполнить',
				},
				'-',
				{
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:33px;width:628px;height:384px;',
			height: 384,width: 628,
			items:
			[
				{
					title:'Настройка',
					items:
					[
		{
			xtype: 'combobox',
			style: 'position:absolute;left:88px;top:30px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Вид документа:',
			style: 'position:absolute;left:6px;top:30px;width:80px;height:19px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:94px;width:614px;height:259px;',
			height: 259,width: 614,
			columns:
			[
				{
					text:'',
					width:'20',
				},
				{
					text:'Реквизит',
					width:'220',
				},
				{
					text:'Тип сравнения',
					width:'120',
				},
				{
					text:'Значение',
					width:'240',
				},
				{
					text:'С',
					width:'120',
				},
				{
					text:'По',
					width:'120',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Сценарий',
			style: 'position:absolute;left:88px;top:6px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись3',
			text: 'Сценарий:',
			style: 'position:absolute;left:6px;top:6px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись36',
			text: 'Период с:',
			style: 'position:absolute;left:328px;top:6px;width:56px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаНач',
			style: 'position:absolute;left:386px;top:6px;width:96px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись37',
			text: 'по:',
			style: 'position:absolute;left:484px;top:6px;width:16px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаКон',
			style: 'position:absolute;left:502px;top:6px;width:96px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаНастройкаПериода',
			text: '...',
			style: 'position:absolute;left:600px;top:6px;width:20px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:70px;width:614px;height:24px;',
			items:
			[
				{
					text:'&Добавить',
				},
				{
					text:'&Удалить',
				},
				{
					text:'Включить все',
				},
				{
					text:'Выключить все',
				},
			]
		},
					]
				},
				{
					title:'Обработка',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:265px;width:614px;height:93px;',
			height: 93,width: 614,
			columns:
			[
				{
					text:'N',
					width:'28',
				},
				{
					text:'Действие',
					width:'222',
				},
				{
					text:'Уточнение действия',
					width:'204',
				},
				{
					text:'Параметр действия',
					width:'239',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:241px;width:614px;height:24px;',
			items:
			[
				{
					text:'&Добавить',
				},
				{
					text:'&Скопировать',
				},
				{
					text:'&Изменить',
				},
				{
					text:'&Удалить',
				},
				{
					text:'Закончить редактирование',
				},
				{
					text:'&Переместить вверх',
				},
				{
					text:'&Переместить вниз',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:46px;width:614px;height:174px;',
			height: 174,width: 614,
			columns:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:22px;width:614px;height:24px;',
			items:
			[
				{
					text:'&Удалить',
				},
				{
					text:'&Переместить вверх',
				},
				{
					text:'&Переместить вниз',
				},
				{
					text:'Сортировать по возрастанию',
				},
				{
					text:'Сортировать по убыванию',
				},
				{
					text:'Заполнить',
				},
			]
		},
					]
				},
			]
		},
	]
});