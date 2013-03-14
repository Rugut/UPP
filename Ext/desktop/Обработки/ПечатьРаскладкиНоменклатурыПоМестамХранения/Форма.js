Ext.define('Обработки.ПечатьРаскладкиНоменклатурыПоМестамХранения.Форма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:780px;height:450px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Печать раскладки номенклатуры по местам хранения',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:780px;height:25px;',
			items:
			[
				{
					text:'',
				},
				{
					text:'',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:425px;width:780px;height:25px;',
			items:
			[
				{
					text:'',
				},
				'-',
				{
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:97px;width:379px;height:72px;',
			height: 72,width: 379,
			columns:
			[
				{
					text:'Поле',
					width:'197',
				},
				{
					text:'Тип',
					width:'139',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьСписокДокументов',
			text: 'Документ:',
			style: 'position:absolute;left:8px;top:33px;width:55px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Документ',
			style: 'position:absolute;left:211px;top:33px;width:176px;height:19px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:219px;width:379px;height:96px;',
			height: 96,width: 379,
			columns:
			[
				{
					text:'Поле',
					width:'224',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:393px;top:97px;width:379px;height:72px;',
			height: 72,width: 379,
			columns:
			[
				{
					text:'Поле',
					width:'224',
				},
				{
					text:'Направление сортировки',
					width:'141',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:195px;width:379px;height:24px;',
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:393px;top:72px;width:379px;height:24px;',
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:73px;width:379px;height:24px;',
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:393px;top:195px;width:379px;height:24px;',
			items:
			[
				{
					text:'',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:393px;top:219px;width:379px;height:96px;',
			height: 96,width: 379,
			columns:
			[
				{
					text:'',
					width:'21',
				},
				{
					text:'Поле',
					width:'112',
				},
				{
					text:'Представление поля',
					width:'112',
				},
				{
					text:'Положение',
					width:'65',
				},
				{
					text:'Ширина',
					width:'53',
				},
				{
					text:'Выравнивание',
					width:'94',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьСписокСкладов',
			text: 'Дополнительные склады:',
			style: 'position:absolute;left:393px;top:33px;width:132px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СписокСкладов',
			style: 'position:absolute;left:530px;top:33px;width:242px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Выводить заголовок',
			style: 'position:absolute;left:567px;top:362px;width:124px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Показывать форму настройки при печати документов',
			style: 'position:absolute;left:397px;top:385px;width:294px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Использовать свойства',
			style: 'position:absolute;left:397px;top:362px;width:140px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКоличествоУровнейМестХранения',
			text: 'Количество уровней мест хранения:',
			style: 'position:absolute;left:397px;top:338px;width:186px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КоличествоУровнейМестХранения',
			style: 'position:absolute;left:587px;top:338px;width:104px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:338px;width:379px;height:24px;',
			items:
			[
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:362px;width:379px;height:55px;',
			height: 55,width: 379,
			columns:
			[
				{
					text:'Приоритет',
					width:'61',
				},
				{
					text:'Представление',
					width:'235',
				},
			]
		},
	]
});