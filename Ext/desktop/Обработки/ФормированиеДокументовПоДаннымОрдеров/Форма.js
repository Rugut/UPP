Ext.define('Обработки.ФормированиеДокументовПоДаннымОрдеров.Форма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:532px;height:292px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Формирование документов по ордерам',
	
	items:
	[
		{
			xtype: 'label',
			name: 'НадписьДата',
			text: 'по:',
			style: 'position:absolute;left:158px;top:32px;width:18px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаОкончанияПериода',
			style: 'position:absolute;left:176px;top:32px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНастройка',
			text: 'Настройка:',
			style: 'position:absolute;left:8px;top:8px;width:68px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:267px;width:532px;height:25px;',
			items:
			[
				{
					text:'Сформировать документы',
				},
				'-',
				{
					text:'Справка',
				},
				{
					text:'Закрыть',
				},
				'-',
			]
		},
		{
			xtype: 'label',
			name: 'НадписьГраницаНачала',
			text: 'За период с: ',
			style: 'position:absolute;left:8px;top:32px;width:68px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаНачалаПериода',
			style: 'position:absolute;left:76px;top:32px;width:80px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:59px;width:516px;height:200px;',
			height: 200,width: 516,
			items:
			[
				{
					title:'Сформированные документы',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:502px;height:144px;',
			height: 144,width: 502,
			columns:
			[
				{
					text:'N',
					width:'28',
				},
				{
					text:'',
					width:'21',
				},
				{
					text:'',
					width:'32',
				},
				{
					text:'Дата',
					width:'120',
				},
				{
					text:'Номер',
					width:'80',
				},
				{
					text:'Документ',
					width:'120',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:502px;height:24px;',
			items:
			[
				'-',
				{
					text:'Установить пометки на все строки',
				},
				{
					text:'Обновить',
				},
				'-',
				'-',
				{
					text:'Провести документы',
				},
				{
					text:'Убрать пометки всех строк',
				},
				{
					text:'Движения документа по регистрам',
				},
				{
					text:'Структура подчиненности документа',
				},
				'-',
				{
					text:'Печать',
				},
				'-',
				{
					text:'Установить/снять пометку удаления',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:20px;top:80px;width:436px;height:24px;',
			items:
			[
				{
					text:'Установить/снять пометку удаления',
				},
				{
					text:'Сортировать по возрастанию',
				},
				{
					text:'Отбор по значению в текущей колонке',
				},
				{
					text:'Вывести список...',
				},
				'-',
				'-',
				{
					text:'Провести документы',
				},
				{
					text:'Установить отбор и сортировку списка...',
				},
				{
					text:'&Переместить вверх',
				},
				{
					text:'Отключить отбор',
				},
				'-',
				{
					text:'',
				},
				{
					text:'Установить пометки на все строки',
				},
				{
					text:'&Переместить вниз',
				},
				'-',
				{
					text:'Настройка списка...',
				},
				'-',
				{
					text:'Убрать пометки всех строк',
				},
				{
					text:'Печать',
				},
				{
					text:'Обновить',
				},
				{
					text:'Сортировать по убыванию',
				},
				'-',
			]
		},
					]
				},
				{
					title:'Учтенные документы',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:502px;height:144px;',
			height: 144,width: 502,
			columns:
			[
				{
					text:'N',
					width:'28',
				},
				{
					text:'',
					width:'21',
				},
				{
					text:'',
					width:'32',
				},
				{
					text:'Дата',
					width:'120',
				},
				{
					text:'Номер',
					width:'80',
				},
				{
					text:'Документ',
					width:'120',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:502px;height:24px;',
			items:
			[
				{
					text:'Убрать пометки всех строк',
				},
				{
					text:'Печать',
				},
				{
					text:'Обновить',
				},
				{
					text:'Провести документы',
				},
				{
					text:'Движения документа по регистрам',
				},
				'-',
				{
					text:'Установить пометки на все строки',
				},
				{
					text:'Структура подчиненности документа',
				},
				'-',
				'-',
				'-',
				'-',
				{
					text:'Установить/снять пометку удаления',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:20px;top:80px;width:436px;height:24px;',
			items:
			[
				{
					text:'Убрать пометки всех строк',
				},
				{
					text:'Установить отбор и сортировку списка...',
				},
				{
					text:'Установить пометки на все строки',
				},
				{
					text:'Сортировать по убыванию',
				},
				{
					text:'Установить/снять пометку удаления',
				},
				{
					text:'Отключить отбор',
				},
				{
					text:'',
				},
				{
					text:'Отбор по значению в текущей колонке',
				},
				'-',
				{
					text:'Печать',
				},
				'-',
				{
					text:'Настройка списка...',
				},
				{
					text:'Провести документы',
				},
				'-',
				{
					text:'Обновить',
				},
				'-',
				{
					text:'Вывести список...',
				},
				{
					text:'&Переместить вниз',
				},
				{
					text:'Сортировать по возрастанию',
				},
				{
					text:'&Переместить вверх',
				},
				'-',
				'-',
			]
		},
					]
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Настройка',
			style: 'position:absolute;left:76px;top:8px;width:448px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаВыбораПериода',
			text: '...',
			style: 'position:absolute;left:258px;top:32px;width:19px;height:19px;',
		},
	]
});