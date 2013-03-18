Ext.define('Отчеты.РегистрРасчетАмортизацииОсновныхСредств.ФормаНастройка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:313px;height:128px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Регистр-расчет амортизации основных средств',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:103px;width:313px;height:25px;',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:86px;top:32px;width:219px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись5',
			text: 'Организация:',
			style: 'position:absolute;left:8px;top:32px;width:76px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаНач',
			style: 'position:absolute;left:86px;top:8px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаКон',
			style: 'position:absolute;left:186px;top:8px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись6',
			text: 'Период с:',
			style: 'position:absolute;left:8px;top:8px;width:76px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'Надпись7',
			text: 'по:',
			style: 'position:absolute;left:168px;top:8px;width:16px;height:19px;text-align:center;',
		},
		{
			xtype: 'button',
			name: 'КнопкаНастройкаПериода',
			text: '...',
			style: 'position:absolute;left:268px;top:8px;width:20px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Аморт. группа:',
			style: 'position:absolute;left:8px;top:56px;width:76px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'АмортизационнаяГруппа',
			style: 'position:absolute;left:86px;top:56px;width:219px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Группировать по объектам основных средств',
			style: 'position:absolute;left:8px;top:80px;width:256px;height:15px;',
		},
	]
});