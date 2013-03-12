Ext.define('Обработки.ОбработкаТабличнойЧастиТовары.Форма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:728px;height:405px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Обработка табличной части',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:107px;width:712px;height:24px;',
			items:
			[
				{
					text:'Снять флажки',
				},
				{
					text:'Инвертировать флажки',
				},
				{
					text:'Установить флажки',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:133px;width:712px;height:215px;',
			height: 215,width: 712,
			columns:
			[
				{
					text:'',
					width:'20',
				},
				{
					text:'Код',
					width:'60',
				},
				{
					text:'Артикул',
					width:'120',
				},
				{
					text:'Номенклатура',
					width:'220',
				},
				{
					text:'Характеристика номенклатуры',
					width:'220',
				},
				{
					text:'Серия номенклатуры',
					width:'220',
				},
				{
					text:'Ед. мест',
					width:'50',
				},
				{
					text:'К. мест',
					width:'45',
				},
				{
					text:'Мест',
					width:'60',
				},
				{
					text:'Количество',
					width:'64',
				},
				{
					text:'Ед.',
					width:'50',
				},
				{
					text:'К.',
					width:'45',
				},
				{
					text:'Цена',
					width:'80',
				},
				{
					text:'Ед. хранения',
					width:'54',
				},
				{
					text:'% руч.ск',
					width:'60',
				},
				{
					text:'% автоматических скидок',
					width:'100',
				},
				{
					text:'% наценки',
					width:'60',
				},
				{
					text:'Розн. цена (руб.)',
					width:'80',
				},
				{
					text:'Сумма',
					width:'80',
				},
				{
					text:'%НДС',
					width:'40',
				},
				{
					text:'Сумма НДС',
					width:'80',
				},
				{
					text:'Всего',
					width:'100',
				},
				{
					text:'Сумма (регл.)',
					width:'100',
				},
				{
					text:'Заказ покупателя',
					width:'250',
				},
				{
					text:'Качество',
					width:'61',
				},
				{
					text:'Склад',
					width:'100',
				},
				{
					text:'Ограничение скидки наценки',
					width:'62',
				},
			]
		},
		{
			xtype: 'button',
			name: 'КнопкаВыполнить',
			text: 'Выполнить',
			style: 'position:absolute;left:640px;top:4px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаВариантаЗачения',
			style: 'position:absolute;left:234px;top:4px;width:400px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВсего',
			text: 'Всего,USD:',
			style: 'position:absolute;left:558px;top:353px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Всего',
			style: 'position:absolute;left:640px;top:353px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВсегоНДС',
			text: 'НДС ( в т. ч.):',
			style: 'position:absolute;left:366px;top:353px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВсегоНДС',
			style: 'position:absolute;left:448px;top:353px;width:80px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:380px;width:728px;height:25px;',
			items:
			[
				{
					text:'ОК',
				},
				{
					text:'Справка',
				},
				'-',
				'-',
				{
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Переносить в документ только отмеченные позиции',
			style: 'position:absolute;left:8px;top:353px;width:290px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:25px;width:712px;height:60px;',
			height: 60,width: 712,
			items:
			[
				{
					title:'Установить серию по ГТД',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьСтранаПроисхождения',
			text: 'Страна происхождения:',
			style: 'position:absolute;left:0px;top:0px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СтранаПроисхождения',
			style: 'position:absolute;left:226px;top:0px;width:400px;height:19px;',
		},
					]
				},
				{
					title:'Упорядочить строки',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:0px;width:712px;height:60px;',
			height: 60,width: 712,
			columns:
			[
				{
					text:'Поле',
					width:'100',
				},
				{
					text:'Направление сортировки',
					width:'60',
				},
			]
		},
					]
				},
			]
		},
	]
});