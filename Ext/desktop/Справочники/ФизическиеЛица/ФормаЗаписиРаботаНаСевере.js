Ext.define('Справочники.ФизическиеЛица.ФормаЗаписиРаботаНаСевере',
	{
	extend: 'Ext.window.Window',
	height: 165,width: 304,
	iconCls: 'bogus',
	title: 'Сведения о стаже работы на севере',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Период',
			style: 'position:absolute;left:176px;top:113px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПорядокНачисленияСеверныхНадбавок',
			style: 'position:absolute;left:176px;top:8px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СеверныйСтажДней',
			style: 'position:absolute;left:251px;top:73px;width:40px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НачальныйПроцентСевернойНадбавки',
			style: 'position:absolute;left:176px;top:32px;width:40px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СеверныйСтажМесяцев',
			style: 'position:absolute;left:154px;top:73px;width:40px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СеверныйСтажЛет',
			style: 'position:absolute;left:47px;top:73px;width:40px;height:19px;',
		},
	]
});