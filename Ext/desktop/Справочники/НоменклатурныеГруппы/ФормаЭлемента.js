Ext.define('Справочники.НоменклатурныеГруппы.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:452px;height:450px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Номенклатурные группы',
	
	items:
	[
		{
			xtype: 'label',
			name: 'НадписьНаименование',
			text: 'Наименование:',
			style: 'position:absolute;left:8px;top:59px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:94px;top:59px;width:242px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:452px;height:25px;',
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:425px;width:452px;height:25px;',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'OK',
				},
				'-',
				{
					text:'Записать',
				},
				'-',
				{
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьСтавкаНДС',
			text: 'Ставка НДС:',
			style: 'position:absolute;left:8px;top:83px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СтавкаНДС',
			style: 'position:absolute;left:94px;top:83px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКод',
			text: 'Код:',
			style: 'position:absolute;left:338px;top:59px;width:40px;height:19px;text-align:center;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Код',
			style: 'position:absolute;left:380px;top:59px;width:64px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьБазоваяЕдиницаИзмерения',
			text: 'Базовая единица:',
			style: 'position:absolute;left:16px;top:131px;width:96px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'БазоваяЕдиницаИзмерения',
			style: 'position:absolute;left:114px;top:131px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ЕдиницаХраненияОстатков',
			style: 'position:absolute;left:364px;top:131px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьЕдиницаХраненияОстатков',
			text: 'Единица хранения остатков:',
			style: 'position:absolute;left:214px;top:131px;width:148px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'ИнформационнаяНадписьБазовойЕдиницыИзмерения',
			text: 'Полное наименование базовой единицы измерения',
			style: 'position:absolute;left:16px;top:153px;width:178px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'ИнформационнаяНадписьЕдиницыХраненияОстатков',
			text: 'Информация о единице хранения остатков',
			style: 'position:absolute;left:214px;top:154px;width:230px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьРодитель',
			text: 'Родитель:',
			style: 'position:absolute;left:8px;top:33px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Родитель',
			style: 'position:absolute;left:94px;top:33px;width:350px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:178px;width:436px;height:239px;',
			height: 239,width: 436,
			items:
			[
				{
					title:'Состав группы',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:422px;height:183px;',
			height: 183,width: 422,
			columns:
			[
				{
					text:'',
					width:'32',
				},
				{
					text:'Код',
					width:'40',
				},
				{
					text:'Артикул',
					width:'120',
				},
				{
					text:'Наименование',
					width:'220',
				},
				{
					text:'Вес вхождения',
					width:'120',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:422px;height:24px;',
			items:
			[
				{
					text:'&Добавить',
				},
				{
					text:'Изменить',
				},
				{
					text:'Установить пометку удаления',
				},
				'-',
				{
					text:'Установить отбор и сортировку списка...',
				},
				{
					text:'Отбор по значению в текущей колонке',
				},
				{
					xtype: 'splitbutton',
					text:'',
					menu: [
				{
					text:'(Список отборов)',
				},
				'-',
				{
					text:'(История отборов)',
				},
				{
					text:'(Список отборов)',
				},
				'-',
				{
					text:'(История отборов)',
				},
					]
				},
				{
					text:'Отключить отбор',
				},
				'-',
				{
					text:'Обновить',
				},
				{
					xtype: 'splitbutton',
					text:'',
					menu: [
				{
					text:'',
				},
				{
					text:'',
				},
				{
					text:'',
				},
					]
				},
			]
		},
					]
				},
				{
					title:'Свойства',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:422px;height:183px;',
			height: 183,width: 422,
			columns:
			[
				{
					text:'',
					width:'20',
				},
				{
					text:'Свойство',
					width:'119',
				},
				{
					text:'Значение',
					width:'220',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:422px;height:24px;',
			items:
			[
			]
		},
					]
				},
				{
					title:'Категории',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:422px;height:183px;',
			height: 183,width: 422,
			columns:
			[
				{
					text:'',
					width:'20',
				},
				{
					text:'',
					width:'20',
				},
				{
					text:'Категория',
					width:'220',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:422px;height:24px;',
			items:
			[
				{
					text:'&Добавить',
				},
				{
					text:'Изменить',
				},
				{
					text:'Удалить',
				},
				{
					text:'',
				},
			]
		},
					]
				},
			]
		},
	]
});