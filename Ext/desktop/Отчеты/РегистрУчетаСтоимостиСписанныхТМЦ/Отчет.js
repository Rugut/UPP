Ext.define('Отчеты.РегистрУчетаСтоимостиСписанныхТМЦ.Отчет',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:604px;height:412px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Регистр учета стоимости МПЗ, списанных в отчетном периоде',
	
	items:
	[
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Организация:',
			style: 'position:absolute;left:304px;top:33px;width:76px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:382px;top:33px;width:214px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:604px;height:25px;',
			items:
			[
				{
					xtype: 'splitbutton',
					text:'',
					menu: [
				{
					text:'Сформировать',
				},
				{
					text:'Заголовок',
				},
				{
					text:'Настройка...',
				},
					]
				},
				'-',
				{
					text:'Сформировать',
				},
				'-',
				{
					text:'Заголовок',
				},
				'-',
				{
					text:'Настройка...',
				},
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
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаНач',
			style: 'position:absolute;left:66px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаКон',
			style: 'position:absolute;left:166px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись5',
			text: 'Период с:',
			style: 'position:absolute;left:8px;top:33px;width:56px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'Надпись6',
			text: 'по:',
			style: 'position:absolute;left:148px;top:33px;width:16px;height:19px;text-align:center;',
		},
		{
			xtype: 'button',
			name: 'КнопкаНастройкаПериода',
			text: '...',
			style: 'position:absolute;left:248px;top:33px;width:20px;height:19px;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:64px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись7',
			text: 'Вид МПЗ:',
			style: 'position:absolute;left:8px;top:57px;width:56px;height:19px;',
		},
	]
});