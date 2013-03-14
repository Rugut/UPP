Ext.define('Обработки.ПодборПараметровРасшифровкиПлатежа.ПараметрыЗаполнения',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:353px;height:453px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Настройка заполнения расшифровки платежа',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:428px;width:353px;height:25px;',
			items:
			[
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
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:353px;height:25px;',
			items:
			[
				{
					xtype: 'splitbutton',
					text:'Действия',
					menu: [
				{
					text:'Восстановить значения...',
				},
				{
					text:'Сохранить значения...',
				},
				'-',
				{
					text:'Закрыть',
				},
					]
				},
				'-',
				{
					text:'Восстановить значения...',
				},
				{
					text:'Сохранить значения...',
				},
				'-',
				{
					text:'Справка',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:32px;width:337px;height:388px;',
			height: 388,width: 337,
			items:
			[
				{
					title:'Основная',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:60px;width:323px;height:302px;',
			height: 302,width: 323,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'ПоЗаявкам',
					items:
					[
		{
			xtype: 'radio',
			boxLabel: 'По возрастанию даты планируемого поступления',
			style: 'position:absolute;left:12px;top:27px;width:276px;height:15px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'По убыванию даты планируемого поступления',
			style: 'position:absolute;left:12px;top:47px;width:273px;height:15px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Подбирать сумму:',
			style: 'position:absolute;left:6px;top:76px;width:116px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СуммаДляПодбора1',
			style: 'position:absolute;left:129px;top:76px;width:120px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Только включенные в платежный календарь',
			style: 'position:absolute;left:6px;top:100px;width:256px;height:19px;',
		},
					]
				},
				{
					title:'ПоДоговорам',
					items:
					[
		{
			xtype: 'radio',
			boxLabel: 'Сначала ранние задолженности',
			style: 'position:absolute;left:12px;top:85px;width:184px;height:15px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Сначала поздние задолженности',
			style: 'position:absolute;left:12px;top:105px;width:192px;height:15px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'По табличной части документа',
			style: 'position:absolute;left:12px;top:125px;width:180px;height:15px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Подбирать сумму:',
			style: 'position:absolute;left:12px;top:144px;width:116px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СуммаДляПодбора',
			style: 'position:absolute;left:130px;top:144px;width:120px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Подбирать планируемые поступления средств',
			style: 'position:absolute;left:12px;top:188px;width:297px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Не превышать запланированных значений',
			style: 'position:absolute;left:12px;top:212px;width:297px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'По сумме платежа',
			style: 'position:absolute;left:12px;top:253px;width:118px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'По сумме взаиморасчетов',
			style: 'position:absolute;left:146px;top:253px;width:158px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Только включенные в платежный календарь',
			style: 'position:absolute;left:12px;top:277px;width:256px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'По фактической задолженности',
			style: 'position:absolute;left:12px;top:25px;width:280px;height:15px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'По оперативной задолженности (с учетом заказов)',
			style: 'position:absolute;left:12px;top:45px;width:280px;height:15px;',
		},
					]
				},
			]
		},
		{
			xtype: 'radio',
			boxLabel: 'По текущей задолженности',
			style: 'position:absolute;left:18px;top:23px;width:163px;height:15px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'По планируемым поступлениям денежных средств',
			style: 'position:absolute;left:18px;top:42px;width:286px;height:15px;',
		},
					]
				},
				{
					title:'Отбор договоров',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:31px;width:323px;height:331px;',
			height: 331,width: 323,
			columns:
			[
				{
					text:'',
					width:'22',
				},
				{
					text:'Поле',
					width:'100',
				},
				{
					text:'Тип сравнения',
					width:'156',
				},
				{
					text:'Значение',
					width:'112',
				},
				{
					text:'С',
					width:'112',
				},
				{
					text:'По',
					width:'112',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:323px;height:24px;',
			items:
			[
			]
		},
					]
				},
			]
		},
	]
});