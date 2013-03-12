Ext.define('Обработки.КалендарныйПланЗакупок.Форма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:700px;height:437px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Календарный план закупок',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:700px;height:25px;',
			items:
			[
				{
					text:'Помощник заполнения',
				},
				'-',
				{
					text:'Обновить1',
				},
				'-',
				{
					text:'Обновить',
				},
				{
					text:'Помощник установки соответствия заказов покупателей и заказов поставщикам',
				},
				{
					text:'Помощник установки соответствия заказов покупателей и заказов поставщикам',
				},
				{
					text:'Помощник заполнения',
				},
				'-',
				'-',
				'-',
				'-',
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:412px;width:700px;height:25px;',
			items:
			[
				'-',
				{
					text:'Выполнить',
				},
				{
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:124px;width:684px;height:280px;',
			height: 280,width: 684,
			columns:
			[
				{
					text:'Номенклатура. Контрагент. Заказ.',
					width:'220',
				},
				{
					text:'Требуемое кол.',
					width:'88',
				},
				{
					text:'Заказанное кол.',
					width:'88',
				},
				{
					text:'Цена',
					width:'80',
				},
				{
					text:'Сумма',
					width:'80',
				},
				{
					text:'Сумма взаиморасчетов',
					width:'128',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьДатаНачала',
			text: 'Период планирования, с:',
			style: 'position:absolute;left:8px;top:33px;width:132px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаНачала',
			style: 'position:absolute;left:143px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаОкончания',
			text: 'по:',
			style: 'position:absolute;left:225px;top:33px;width:16px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаОкончания',
			style: 'position:absolute;left:243px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьУровеньРазворотаДерева',
			text: 'Уровень разворота дерева:',
			style: 'position:absolute;left:364px;top:57px;width:144px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:100px;width:684px;height:24px;',
			items:
			[
				'-',
				'-',
				'-',
				{
					text:'Автокорректировка заказа',
				},
				{
					text:'Список заказов',
				},
				{
					text:'Отбор по текущему значению',
				},
				{
					text:'Автокорректировка заказа',
				},
				{
					text:'Отключить отбор',
				},
				{
					text:'Настройка отбора',
				},
				{
					text:'Настройка отбора',
				},
				{
					text:'Отключить отбор',
				},
				'-',
				'-',
				{
					text:'Действие',
				},
				'-',
				'-',
				{
					text:'Список заказов',
				},
				{
					text:'Изменить',
				},
				{
					text:'Удалить',
				},
				{
					text:'Отбор по текущему значению',
				},
				{
					text:'Новый заказ',
				},
				'-',
				'-',
				'-',
				{
					text:'Новый заказ',
				},
				{
					text:'Изменить',
				},
				{
					text:'Удалить',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьПорядокОтображения',
			text: 'Порядок отображения:',
			style: 'position:absolute;left:8px;top:57px;width:132px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаНастройкаПериода',
			text: '...',
			style: 'position:absolute;left:325px;top:33px;width:19px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаОтветственный',
			style: 'position:absolute;left:509px;top:33px;width:183px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтветственныйЗаЗакупки',
			text: 'Ответственный за закупки:',
			style: 'position:absolute;left:364px;top:33px;width:144px;height:19px;',
		},
	]
});