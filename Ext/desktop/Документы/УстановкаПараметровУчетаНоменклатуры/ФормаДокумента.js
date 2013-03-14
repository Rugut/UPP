Ext.define('Документы.УстановкаПараметровУчетаНоменклатуры.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:800px;height:388px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Установка параметров учета номенклатуры',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:800px;height:25px;',
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:363px;width:800px;height:25px;',
			items:
			[
				{
					text:'Печать',
				},
				'-',
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
			name: 'НадписьНомер',
			text: 'Номер:',
			style: 'position:absolute;left:8px;top:33px;width:40px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьДата',
			text: 'от:',
			style: 'position:absolute;left:130px;top:33px;width:16px;height:19px;text-align:center;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:48px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:148px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтветственный',
			text: 'Ответственный:',
			style: 'position:absolute;left:8px;top:312px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:96px;top:312px;width:696px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКомментарий',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:336px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:96px;top:336px;width:696px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПо',
			text: 'по:',
			style: 'position:absolute;left:272px;top:33px;width:16px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаОкончанияДействия',
			text: '',
			style: 'position:absolute;left:288px;top:33px;width:504px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:60px;width:784px;height:244px;',
			height: 244,width: 784,
			items:
			[
				{
					title:'Товары',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:770px;height:188px;',
			height: 188,width: 770,
			columns:
			[
				{
					text:'N',
					width:'28',
				},
				{
					text:'Организация',
					width:'100',
				},
				{
					text:'Номенклатура',
					width:'120',
				},
				{
					text:'Принадлежность номенклатуры',
					width:'92',
				},
				{
					text:'Учет запасов',
					width:'76',
				},
				{
					text:'Учет доходов',
					width:'76',
				},
				{
					text:'Учет расходов',
					width:'76',
				},
				{
					text:'Учет запасов (НУ)',
					width:'76',
				},
				{
					text:'Учет доходов (НУ)',
					width:'76',
				},
				{
					text:'Учет расходов (НУ)',
					width:'76',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:770px;height:24px;',
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
				{
					text:'Сортировать по возрастанию',
				},
				{
					text:'Сортировать по убыванию',
				},
			]
		},
					]
				},
				{
					title:'Услуги',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:770px;height:188px;',
			height: 188,width: 770,
			columns:
			[
				{
					text:'N',
					width:'28',
				},
				{
					text:'Организация',
					width:'100',
				},
				{
					text:'Номенклатура',
					width:'100',
				},
				{
					text:'Учет доходов',
					width:'76',
				},
				{
					text:'Учет расходов',
					width:'76',
				},
				{
					text:'Счет затрат',
					width:'76',
				},
				{
					text:'Учет доходов (НУ)',
					width:'76',
				},
				{
					text:'Учет расходов (НУ)',
					width:'76',
				},
				{
					text:'Счет затрат (НУ)',
					width:'76',
				},
				{
					text:'Подразделение',
					width:'100',
				},
				{
					text:'Подразделение организации',
					width:'100',
				},
				{
					text:'Номенклатурная группа',
					width:'100',
				},
				{
					text:'Учет затрат по заказам',
					width:'70',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:770px;height:24px;',
			items:
			[
			]
		},
					]
				},
				{
					title:'Документы',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:45px;width:770px;height:173px;',
			height: 173,width: 770,
			columns:
			[
				{
					text:'N',
					width:'28',
				},
				{
					text:'Организация',
					width:'140',
				},
				{
					text:'Способ суммовой оценки',
					width:'140',
				},
			]
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Использовать параметры учета при заполнении реквизитов документов',
			style: 'position:absolute;left:6px;top:6px;width:392px;height:19px;',
		},
					]
				},
			]
		},
	]
});