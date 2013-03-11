Ext.define('Отчеты.ОтчетПоПроводкамХозрасчетный.ФормаНастройка',
	{
	extend: 'Ext.window.Window',
	height: 324,width: 460,
	iconCls: 'bogus',
	title: 'Настройка: Отчет по проводкам',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:299px;width:460px;height:25px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'ОК',
				},
				{
					text:'Справка',
				},
				{
					text:'ОсновныеДействияФормыЗакрыть',
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
			xtype: 'button',
			name: 'КнопкаНастройкаПериода',
			text: '...',
			style: 'position:absolute;left:288px;top:6px;width:20px;height:19px;',
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
					text:'СчетДт',
				},
				{
					text:'СчетКт',
				},
				{
					text:'Субконто',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:90px;width:126px;height:25px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'Действие',
				},
				{
					text:'Очистить',
				},
				{
					text:'Действие1',
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
					text:'Использование',
				},
				{
					text:'Имя',
				},
				{
					text:'ВидСравнения',
				},
				{
					text:'Значение',
				},
				{
					text:'ЗначениеС',
				},
				{
					text:'ЗначениеПо',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:140px;top:90px;width:296px;height:25px;',
			items:
			[
				{
					text:'ВыключитьВсе',
				},
				{
					text:'Действие1',
				},
				{
					text:'ВключитьВсе',
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
			xtype: 'textfield',
			hideLabel: true,
			name: 'НомерЖурнала',
			style: 'position:absolute;left:116px;top:32px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Подстрока',
			style: 'position:absolute;left:72px;top:125px;width:364px;height:19px;',
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