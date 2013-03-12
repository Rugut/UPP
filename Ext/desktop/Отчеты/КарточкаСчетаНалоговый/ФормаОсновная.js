Ext.define('Отчеты.КарточкаСчетаНалоговый.ФормаОсновная',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:738px;height:445px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Отчет  Карточка счета',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:738px;height:25px;',
			items:
			[
				{
					text:'Настройка...',
				},
				'-',
				{
					text:'Действие1',
				},
				'-',
				{
					text:'Действие',
				},
				{
					text:'Восстановить значения',
				},
				{
					text:'Заголовок',
				},
				'-',
				'-',
				{
					text:'Сохранить значения',
				},
				{
					text:'Сохранить значения',
				},
				{
					text:'Действие1',
				},
				'-',
				{
					text:'Сформировать',
				},
				{
					text:'Настройка...',
				},
				{
					text:'Сформировать',
				},
				{
					text:'Заголовок',
				},
				'-',
				{
					text:'Восстановить значения',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаДатаНач1',
			style: 'position:absolute;left:66px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаДатаКон1',
			style: 'position:absolute;left:166px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись5',
			text: 'Период с:',
			style: 'position:absolute;left:8px;top:33px;width:56px;height:18px;',
		},
		{
			xtype: 'label',
			name: 'Надпись6',
			text: 'по:',
			style: 'position:absolute;left:148px;top:33px;width:16px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаНастройкаПериода',
			text: '...',
			style: 'position:absolute;left:248px;top:33px;width:20px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Счет:',
			style: 'position:absolute;left:274px;top:33px;width:32px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Счет',
			style: 'position:absolute;left:308px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись7',
			text: 'Организация:',
			style: 'position:absolute;left:392px;top:33px;width:76px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:470px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВидУчета',
			text: 'Вид учета:',
			style: 'position:absolute;left:595px;top:33px;width:57px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидУчета',
			style: 'position:absolute;left:655px;top:33px;width:75px;height:19px;',
		},
	]
});