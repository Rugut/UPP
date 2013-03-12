Ext.define('Отчеты.ОтчетПоПроводкамМеждународный.ФормаНастройка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:460px;height:324px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Настройка: Отчет по проводкам',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:299px;width:460px;height:25px;',
			items:
			[
				{
					text:'ОК',
				},
				'-',
				{
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:8px;width:444px;height:283px;',
			height: 283,width: 444,
			items:
			[
				{
					title:'Общие',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаНач',
			style: 'position:absolute;left:100px;top:6px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаКон',
			style: 'position:absolute;left:204px;top:6px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаНач',
			text: 'Период с:',
			style: 'position:absolute;left:6px;top:6px;width:83px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаКон',
			text: 'по:',
			style: 'position:absolute;left:184px;top:6px;width:16px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаНастройкаПериода',
			text: '...',
			style: 'position:absolute;left:288px;top:6px;width:20px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:6px;top:32px;width:83px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:100px;top:32px;width:248px;height:19px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:120px;width:126px;height:135px;',
			height: 135,width: 126,
			columns:
			[
				{
					text:'Дебет',
					width:'45',
				},
				{
					text:'Кредит',
					width:'47',
				},
				{
					text:'Субконто',
					width:'240',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:90px;width:126px;height:25px;',
			items:
			[
				'-',
				{
					text:'Очистить',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:140px;top:120px;width:296px;height:135px;',
			height: 135,width: 296,
			columns:
			[
				{
					text:'',
					width:'20',
				},
				{
					text:'Поле',
					width:'100',
				},
				{
					text:'Тип сравнения',
					width:'60',
				},
				{
					text:'Значение',
					width:'100',
				},
				{
					text:'С',
					width:'100',
				},
				{
					text:'По',
					width:'100',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:140px;top:90px;width:296px;height:25px;',
			items:
			[
				{
					text:'Действие1',
				},
				{
					text:'Включить все',
				},
				{
					text:'Выключить все',
				},
				{
					text:'Действие',
				},
			]
		},
					]
				},
				{
					title:'Отбор',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Валюта',
			style: 'position:absolute;left:116px;top:6px;width:80px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Валюта:',
			style: 'position:absolute;left:6px;top:6px;width:106px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НомерЖурнала',
			style: 'position:absolute;left:116px;top:32px;width:80px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Номер журнала:',
			style: 'position:absolute;left:6px;top:32px;width:106px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Подстрока',
			style: 'position:absolute;left:72px;top:125px;width:364px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'В субконто',
			style: 'position:absolute;left:72px;top:172px;width:128px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'В содержании',
			style: 'position:absolute;left:72px;top:149px;width:128px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Без учета регистра',
			style: 'position:absolute;left:228px;top:149px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'Подстрока:',
			style: 'position:absolute;left:6px;top:125px;width:62px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Документ:',
			style: 'position:absolute;left:6px;top:59px;width:106px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Регистратор',
			style: 'position:absolute;left:116px;top:59px;width:320px;height:19px;',
		},
					]
				},
			]
		},
	]
});